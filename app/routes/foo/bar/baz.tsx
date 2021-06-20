import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";
import * as S from "./baz.cssjs";

import stylesUrl from "../../../styles/foo/bar/baz.css";

export let meta: MetaFunction = () => {
  return {};
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};

export default function Index() {
  return <S.Container>foo bar baz route</S.Container>;
}
