import { css } from "@emotion/react";

function Footer() {
  return (
    <footer css={cssProps.root}>
      Powered by Gatsby, Hosted by GitHub Pages.
      <br />
      ©<a href="https://github.com/partykyoung" rel="noopener" target="_blank">KyoungAh</a>, All rights reserved.
    </footer>
  );
};

const cssProps = {
  root: css({
    padding: '32px 0',
    textAlign: 'center',
    fontSize: 14,
    color: 'hsla(var(--palette-gray-60), 100%)',
    lineHeight: 1.5,
    'a': {
      color: 'hsla(var(--palette-gray-60), 100%)'
    }
  })
}

export default Footer;