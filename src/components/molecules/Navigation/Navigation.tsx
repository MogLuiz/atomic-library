// Packages
import React from "react";

// Styles
import * as S from "./styles";

type TLinkItem = {
  title: string;
  url: string;
};

type TNavigationProps = {
  direction: string;
  link: TLinkItem[];
};

const Navigation = ({ direction, link }: TNavigationProps) => (
  <S.Wrapper>
    {link.map(({ title, url }: TLinkItem) => (
      <a href={url}>{title}</a>
    ))}
  </S.Wrapper>
);

export default Navigation;
