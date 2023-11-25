import { Link } from "gatsby";
import { css } from "@emotion/react";

import { mqMin } from "../styles/mediaQuery";

const cssProps = {
  root: css({
    display: 'flex',
    width: '100%',
    height: 'var(--header-height)',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    boxShadow: '0px 0px 8px hsla(var(--palette-gray-20), 100%)',
    [mqMin('xs')]: {
      padding: '0 24px',
    }
  }),
  logo: css({
    maxWidth:194,
     height: 'auto' 
  }),
  navigation: css({
    paddingLeft: '28px',

    [mqMin('sm')]: {
      paddingLeft: 0,
    },
  }),
  pages: css({
    display: 'flex',
    gap: '12px',
    listStyleType: 'none',

    [mqMin('sm')]: {
      gap: '32px',
    }
  }),
  page: css({
    width: 36,
    height: 36,
    borderRadius: '100%',
    backgroundColor: 'var(--secondary-color)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'hsla(var(--palette-gray-80), 100%);',
    backgroundSize: 24,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    [mqMin('sm')]: {
      width: 'auto',
      height: 'auto',
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      fontSize: 18
    }
  }),
  tags: css({
    backgroundImage: `url("/images/tags.svg")`,
    [mqMin('sm')]: {
      '&:after': {
        content: '"Tags"'
      },
    }
  }),
  about: css({
    backgroundImage: `url("/images/about.svg")`,
    [mqMin('sm')]: {
      '&:after': {
        content: '"About"'
      },
    }
  })
}

function Header() {
  return (
    <header css={cssProps.root}>
      <Link to="/">
        <img 
          src="/images/logo.png" 
          srcSet={`/images/logo-small.png 200w, /images/logo.png 300w`} 
          sizes="(max-width: 360px) 200px, 300px" 
          alt="dev.kyoungah.me"
          css={cssProps.logo} />
      </Link>
      <nav css={cssProps.navigation}>
        <ul css={cssProps.pages}>
          <li>
            <Link to="/tags"><span css={[cssProps.page, cssProps.tags]} /></Link>
          </li>
          <li>
            <a href="/about" rel="noopener" target="_blank"><span css={[cssProps.page, cssProps.about]} /></a>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;