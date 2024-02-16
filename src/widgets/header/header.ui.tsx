import { Link } from 'gatsby';
import { clsx } from 'clsx';

import {
  about,
  headerRoot,
  headerLogo,
  headerNavigation,
  headerNavigationList,
  headerNavigationItem,
  headerNavigationItemLink,
  tags,
} from './header.module.css';

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
        <ul className={headerNavigationList}>
          <li className={headerNavigationItem}>
            <Link to="/tags">
              <span
                aria-label="tags"
                className={clsx(headerNavigationItemLink, tags)}
              />
            </Link>
          </li>
          <li className={headerNavigationItem}>
            <a href="/about" rel="noopener" target="_blank">
              <span
                aria-label="about"
                className={clsx(headerNavigationItemLink, about)}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
