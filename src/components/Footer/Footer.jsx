import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles["c-footer"]}>
      <div className={styles["c-footer__social"]}>
        <a href="">
          <img src="./img/fb.png" alt="Facebook icon" />
        </a>
        <a href="">
          <img src="./img/tw.png" alt="Twitter icon" />
        </a>
        <a href="">
          <img src="./img/ig.png" alt="Instagram icon" />
        </a>
      </div>
      <img
        src="./img/logo.png"
        alt="Organo logo"
        className={styles["c-footer__logo"]}
      />
      <p className={styles["c-footer__text"]}>
        Desenvolvido por Gustavo Costa, no curso da Alura
      </p>
    </footer>
  );
};

export { Footer };
