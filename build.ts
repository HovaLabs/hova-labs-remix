import fs from "fs";
import path from "path";

import * as S from "./app/routes/index.cssjs";
import { createStitches } from "./app/design-system/stitches";

function createRouteCss() {
  const routeCssArray = fromDir(
    path.join(__dirname, "./app/routes"),
    ".cssjs.ts"
  );
  routeCssArray.forEach((route) => {
    const components = require(route);
    const { cssString, cssFilePath } = createComponentStyles(components, route);
    fs.writeFileSync(cssFilePath, cssString);
  });
}

function createDesignSystemCss() {
  const designSystemCssArray = fromDir(
    path.join(__dirname, "./app/design-system"),
    ".cssjs.ts"
  );
  let styleString = "";
  designSystemCssArray.forEach((componentRoute) => {
    const components = require(componentRoute);
    const { cssString } = createComponentStyles(components, componentRoute);
    styleString += cssString;
  });
  fs.writeFileSync(
    path.join(__dirname, "./app/styles/design-system.css"),
    styleString
  );
}

createRouteCss();
createDesignSystemCss();

function fromDir(startPath: string, filter: string): string[] {
  const fileArray: string[] = [];

  if (!fs.existsSync(startPath)) {
    return fileArray;
  }

  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fileArray.push(...fromDir(filename, filter)); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      fileArray.push(filename);
    }
  }
  return fileArray;
}

function createComponentStyles(Component: any, pathname: string) {
  const { toString, darkTheme } = createStitches();
  darkTheme.toString();

  const pathArray = pathname.split(path.sep);
  const fileName = pathArray.pop() ?? "";
  const cssOutDirectoryArray = pathArray.map((p) => {
    if (p === "routes") {
      return "styles";
    }
    return p;
  });
  const cssOutDirectory = cssOutDirectoryArray.join(path.sep);
  const cssFilePath = [
    ...cssOutDirectoryArray,
    fileName.replace(".cssjs.ts", ".css"),
  ].join(path.sep);

  const baseStyles = toString();

  // We want the theme in our root
  // Render every design system component with every possible combination of props
  Object.entries(Component).forEach(([keyName, C]: [string, any]) => {
    if (keyName === "globalStyles") {
      C();
      return {
        cssString: "",
        fileName: "",
      };
    }
    // @ts-ignore
    const variants: any = Array.from(
      C[Object.getOwnPropertySymbols(C)[0]]
    )[0][2];
    let variantProps: Record<string, string[]> = {};
    variants.forEach((v: any) => {
      const variantKey = Object.keys(v[0])[0];
      if (!variantProps[variantKey]) {
        variantProps[variantKey] = [undefined, v[0][variantKey]];
      } else {
        variantProps[variantKey].push(v[0][variantKey]);
      }
    });
    let propArray: any[] = [{}];
    Object.entries(variantProps).forEach(
      ([variantName, variants]: [string, string[]]) => {
        if (!propArray.length) {
          variants.forEach((variant) => {
            propArray.push({ [variantName]: variant });
          });
        } else {
          const newPropArray: any[] = [];
          variants.forEach((variant) => {
            propArray.forEach((prop) => {
              newPropArray.push({ [variantName]: variant, ...prop });
            });
          });
          propArray = newPropArray;
        }
      }
    );
    propArray.forEach((props) => {
      // @ts-ignore
      C?.render(props);
    });
  });
  if (!fs.existsSync(cssOutDirectory)) {
    fs.mkdirSync(cssOutDirectory, { recursive: true });
  }
  const cssString = toString().replace(
    fileName === "root.cssjs.ts" ? "" : baseStyles,
    ""
  );
  return {
    cssString,
    cssFilePath,
  };
}
