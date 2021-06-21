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
        <S.AboutContainer>
          <Text>ABOUT</Text>
          <Text font="titleLarge">The Hovas</Text>
          <Text>
            We are two Nebraska nerds currently living in the SF Bay Area who
            use diverse backgrounds in art and science to build scalable
            projects.
          </Text>
        </S.AboutContainer>
        <S.ServicesContainer></S.ServicesContainer>
        <S.EventsAreaContainer></S.EventsAreaContainer>
        <S.NewOnTheBlogContainer></S.NewOnTheBlogContainer>
      </S.Body>
    </S.Container>
  );
}
