import type { LinksFunction, LoaderFunction } from "remix";
import { Meta, Links, Scripts, useRouteData, LiveReload } from "remix";
import { Outlet } from "react-router-dom";

import stylesUrl from "./styles/root.css";
import designSystem from "./styles/design-system.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: designSystem },
  ];
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function() {
      window.__onThemeChange = function() {};
      function setTheme(newTheme) {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        document.body.className = newTheme;
        window.__onThemeChange(newTheme);
      }
  
      var preferredTheme;
      try {
        preferredTheme = localStorage.getItem('theme');
      } catch (err) { }
  
      window.__setPreferredTheme = function(newTheme) {
        setTheme(newTheme);
        try {
          localStorage.setItem('theme', newTheme);
        } catch (err) {}
      }
  
      var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkQuery.addListener(function(e) {
        window.__setPreferredTheme(e.matches ? 'dark' : 'light')
      });
  
      setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
    })();
      `,
          }}
        />
        {children}
        {process.env.NODE_ENV === "development" ? <Scripts /> : null}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}
