import { Link } from "gatsby";

import {
  headerRoot,
  headerLogo,
  headerNavigation,
  headerNavigationItem,
} from "./header.module.css";

function Header() {
  return (
    <header className={headerRoot}>
      <Link to="/">
        <img
          src="/images/logo.png"
          srcSet={`/images/logo-small.png 200w, /images/logo.png 300w`}
          sizes="(max-width: 360px) 200px, 300px"
          alt="dev.kyoungah.me"
          className={headerLogo}
        />
      </Link>
      <nav className={headerNavigation}>
        <ul className={headerNavigationItem}>
          <li>
            <Link to="/tags">
              {/* <span className={[cssProps.page, cssProps.tags]} /> */}
            </Link>
          </li>
          <li>
            <a href="/about" rel="noopener" target="_blank">
              {/* <span className={[cssProps.page, cssProps.about]} /> */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
