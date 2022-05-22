// Packages
import React from "react";

// Styles
import * as S from "./styles";

type TLinkItem = {
  title: string;
  url: string;
};

type TNavigationProps = {
  direction: "vertical" | "horizontal";
  links: TLinkItem[];
};

const Navigation = ({ direction, links }: TNavigationProps) => (
  <S.Wrapper>
    {links.map(({ title, url }: TLinkItem) => (
      <a href={url}>{title}</a>
    ))}
  </S.Wrapper>
);

export default Navigation;
export type TLinkType = TLinkItem;
