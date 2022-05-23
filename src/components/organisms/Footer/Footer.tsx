// Molecules
import { Navigation, TLinkItem, TNavigationProps } from "../../molecules";

// Styles
import * as S from "./styles";

type TMenus = {
  items: Array<{
    title: string;
    url: string;
  }>;
  title?: string;
};

type TFooterProps = {
  menus: TMenus[];
};

const Footer = ({ menus }: TFooterProps) => (
  <S.Wrapper>
    <div className="footer__contents">
      <div className="footer__wrapper">
        {menus.map(({ items, title }) => (
          <div className="footer__navigation" key={`footer-nav-${title}`}>
            {title && <h3 className="footer__heading">{title}</h3>}
            <Navigation direction="vertical" links={items} />
          </div>
        ))}
      </div>

      <div className="footer__newsletter">
        <h4 className="footer__heading">Join our newsletter</h4>
        <p>We will send you updates on new products and discounts.</p>
      </div>

      <nav className="footer__copyright">
        <p>Copyright &copy; Celtic Elements {new Date().getFullYear()}</p>
        <a
          href="https://github.com/MogLuiz"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website by Luiz Henrique
        </a>
      </nav>
    </div>
  </S.Wrapper>
);

export type TFooterArrayType = TFooterProps;
export default Footer;
