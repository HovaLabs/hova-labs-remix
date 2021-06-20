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
        <Text font="titleLarge">titleLarge</Text>
        <Text font="titleMedium">titleMedium</Text>
        <Text font="titleSmall">titleSmall</Text>
        <Text style={{ color: theme.colors.primary }}>
          textPlain{" "}
          <Text as="span" font="titleMedium">
            ok now <strong>its</strong> bigger
          </Text>
        </Text>
      </S.TopNav>
      <S.Body>
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
        asdfhjkalskdjhflaksjdhflakjsdhflkjasdhl
      </S.Body>
    </S.Container>
  );
}
