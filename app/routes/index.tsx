import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";
import * as S from "./index.cssjs";
import { Text, theme } from "../design-system";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Hova Labs",
    description: "Welcome to the Hova Labs website!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <S.Container>
      <S.TopNav>
        <Text>Top Nav stuff here</Text>
      </S.TopNav>
      <S.Body>
        <Text as="h1" font="titleLarge">
          titleLarge
        </Text>
        <Text as="h2" font="titleMedium">
          titleMedium
        </Text>
        <Text as="h3" font="titleSmall">
          titleSmall
        </Text>
        <Text style={{ color: theme.colors.primary }}>
          textPlain{" "}
          <Text as="span" font="titleMedium">
            ok now its bigger. <strong>Now its bolder.</strong>
          </Text>
        </Text>
      </S.Body>
    </S.Container>
  );
}
