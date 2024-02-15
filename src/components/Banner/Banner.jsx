import styles from "./Banner.module.css";
function Banner() {
  return <header className={styles["c-banner"]}>
    <img className={styles["c-banner__img"]} src="./img/banner.png" alt="Banner azul com uma imagem de pessoas juntando as mãos como um time, com o texto 'Pessoas e times organizados em um só lugar'" />;
  </header>
}

export { Banner };
