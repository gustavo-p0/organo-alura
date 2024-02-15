import PropType from 'prop-types'
import styles from './Button.module.css';
const Button = ({type = 'button', children}) => {
  return <button className={styles['c-button']} type={type}>{children}</button>
};

Button.propTypes = {
  type: PropType.string,
  children: PropType.oneOfType([
    PropType.node,
    PropType.arrayOf(PropType.node)
  ]).isRequired
}

export { Button };
