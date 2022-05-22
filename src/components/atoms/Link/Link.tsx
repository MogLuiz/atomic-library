// Packages
import React from "react";

type TLinkProps = {
  text: string;
};

const Link = ({ text }: TLinkProps) => <a href="#">{text}</a>;

export default Link;
