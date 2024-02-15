import PropTypes from 'prop-types'
import styles from './Label.module.css';

const Label = ({ label, htmlFor }) => {
  return <label className={styles['c-label']} htmlFor={htmlFor}>{label}:</label>;
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
}

export { Label };
