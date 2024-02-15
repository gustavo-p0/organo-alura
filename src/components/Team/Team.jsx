import PropTypes from 'prop-types'
import styles from './Team.module.css'
import { Buddy } from '../Buddy';

const Team = ({name, colors, buddys}) => {
  return (
    <section
      className={styles["c-team"]}
      style={{ backgroundColor: colors.secondary }}
    >
      <h3
        className={styles["c-team__title"]}
        style={{ borderColor: colors.primary }}
      >
        {name}
      </h3>
      <div className={styles['c-team__buddys']}>
        {buddys.map((buddy) => {
          return (
            <Buddy
              key={buddy.name}
              name={buddy.name}
              role={buddy.role}
              teamColor={colors.primary}
            />
          );
        })}
      </div>
    </section>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  colors: PropTypes.object.isRequired,
  buddys: PropTypes.arrayOf(PropTypes.object)
}
export { Team };
