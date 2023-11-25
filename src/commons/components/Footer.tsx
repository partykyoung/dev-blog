import { css } from "@emotion/react";

function Footer() {
  return (
    <footer css={cssProps.root}>
      <span>Powered by Gatsby, Hosted by GitHub Pages.</span>
      <span>©<a href="https://github.com/partykyoung" rel="noopener" target="_blank">KyoungAh</a>, All rights reserved.</span>
    </footer>
  );
};

const cssProps = {
  root: css({
    display: 'flex',
    height: 'var(--footer-height)',
    textAlign: 'center',
    fontSize: 14,
    color: 'hsla(var(--palette-gray-60), 100%)',
    lineHeight: 1.5,
    alignItems: 'center',
    gap: 2,
    justifyContent: 'center',
    flexDirection: 'column',

    ['a'] : {
      color: 'hsla(var(--palette-gray-60), 100%)'
    }
  })
}

export default Footer;