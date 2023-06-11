import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react";

import { mqMin } from "../styles/mediaQuery";

import about from '../images/about.svg';
import posts from '../images/posts.svg';
import tags from '../images/tags.svg';

const cssProps = {
<<<<<<< HEAD
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
  navigation: css({
    paddingLeft: '28px',

    [mqMin('sm')]: {
      paddingLeft: 0,
    },
  }),
  pages: css({
    display: 'flex',
    gap: '18px',

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
      fontSize: '20px'
    }
  }),
  posts: css({
    backgroundImage: `url(${posts})`,

    [mqMin('sm')]: {
      '&:after': {
        content: '"Posts"'
      },
    }
  }),
  tags: css({
    backgroundImage: `url(${tags})`,
    [mqMin('sm')]: {
      '&:after': {
        content: '"Tags"'
      },
    }
  }),
  about: css({
    backgroundImage: `url(${about})`,
    [mqMin('sm')]: {
      '&:after': {
        content: '"About"'
      },
    }
  })
=======
  root: css`
    width: 100%;
    height: var(--header-height);
  `
>>>>>>> 5d2a438 (wip: header)
}

function Header() {
<<<<<<< HEAD
  return <header css={cssProps.root}>
<<<<<<< HEAD
    <StaticImage alt="A dinosaur" src="../images/logo.png" width={254} height={45} />
=======
    <StaticImage alt="A dinosaur" src="../images/logo.png" width={275} height={49} />
>>>>>>> 5d2a438 (wip: header)
  </header>
=======
  return (<header css={cssProps.root}>
    <Link to="/">
      <StaticImage src="../images/logo.png" width={237} height={42} alt="logo" />
    </Link>
    <nav css={cssProps.navigation}>
      <ul css={cssProps.pages}>
        <li>
          <Link to="/posts"><span css={[cssProps.page, cssProps.posts]} /></Link>
        </li>
        <li>
          <Link to="/posts"><span css={[cssProps.page, cssProps.tags]} /></Link>
        </li>
        <li>
          <Link to="/posts" rel="noopener" target="_blank"><span css={[cssProps.page, cssProps.about]} /></Link>
        </li>
      </ul>
    </nav>
  </header>)
>>>>>>> f269900 (wip: header)
};

export default Header;