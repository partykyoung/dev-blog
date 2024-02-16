import { Link } from "gatsby";

import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles["header-root"]}>
      <Link to="/">
        <img
          src="/images/logo.png"
          srcSet={`/images/logo-small.png 200w, /images/logo.png 300w`}
          sizes="(max-width: 360px) 200px, 300px"
          alt="dev.kyoungah.me"
          css={cssProps.logo}
        />
      </Link>
      <nav css={cssProps.navigation}>
        <ul css={cssProps.pages}>
          <li>
            <Link to="/tags">
              <span css={[cssProps.page, cssProps.tags]} />
            </Link>
          </li>
          <li>
            <a href="/about" rel="noopener" target="_blank">
              <span css={[cssProps.page, cssProps.about]} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
