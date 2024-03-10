import { footerRoot } from './footer.module.css';

function Footer() {
  return (
    <footer className={footerRoot}>
      <span>Powered by Gatsby, Hosted by GitHub Pages.</span>
      <span>
        ©
        <a
          href="https://github.com/partykyoung"
          rel="noreferrer"
          target="_blank">
          KyoungAh
        </a>
        , All rights reserved.
      </span>
    </footer>
  );
}

export { Footer };
