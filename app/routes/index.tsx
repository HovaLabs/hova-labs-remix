import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";
import * as S from "./index.cssjs";
import { Image, Text, theme } from "../design-system";
import * as images from "../images";

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
        <S.HeroContainer>
          <Image src={images.hero} />
        </S.HeroContainer>
      </S.Body>
    </S.Container>
  );
}
