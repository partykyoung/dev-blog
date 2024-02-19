import { Link } from "gatsby";

import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.headerRoot}>
      <Link to="/">
        <img
          src="/images/logo.png"
          srcSet={`/images/logo-small.png 200w, /images/logo.png 300w`}
          sizes="(max-width: 360px) 200px, 300px"
          alt="dev.kyoungah.me"
          className={styles["header-logo"]}
        />
      </Link>
      <nav className={styles["header-navigation"]}>
        <ul className={styles["header-navigation-item"]}>
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
