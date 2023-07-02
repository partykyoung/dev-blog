import React from "react";
import { css } from "@emotion/react";

import { StaticImage } from "gatsby-plugin-image"


const cssProps = {
  root: css({
    display: 'flex',
    width: '100%',
    height: 'var(--header-height)',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: 'var(--primary-color)'
  })
}

function Header() {
  return <header css={cssProps.root}>
    <StaticImage alt="A dinosaur" src="../images/logo.png" width={254} height={45} />
  </header>
};

export default Header;