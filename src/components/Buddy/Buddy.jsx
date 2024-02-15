import PropTypes from 'prop-types';
import styles from './Buddy.module.css';

const Buddy = ({name, role, teamColor}) => {

  return (
    <article className={styles["c-buddy"]}>
      <header className={styles["c-buddy__header"]} style={{backgroundColor: teamColor}}>
        <img
          className={styles["c-buddy__header__img"]}
          src="https://github.com/gustavo-p0.png"
          alt=""
        />
      </header>
      <section className={styles["c-buddy__body"]}>
        <h4 className={styles["c-buddy__body__name"]}>{name}</h4>
        <p className={styles["c-buddy__body__role"]}>
          {role}
        </p>
      </section>
    </article>
  );
};

Buddy.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  teamColor: PropTypes.string.isRequired,
}

export { Buddy };
