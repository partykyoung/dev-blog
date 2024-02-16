import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer-root"]}>
      <span>Powered by Gatsby, Hosted by GitHub Pages.</span>
      <span>
        ©
        <a href="https://github.com/partykyoung" rel="noopener" target="_blank">
          KyoungAh
        </a>
        , All rights reserved.
      </span>
    </footer>
  );
}

export { Footer };
