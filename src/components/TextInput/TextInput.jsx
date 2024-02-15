import PropTypes from 'prop-types'
import styles from './TextInput.module.css';
import inputStyles from "../common/css/Input.module.css";
import { Label } from '../Label';

const TextInput = ({ label, placeholder, type = 'text', value, handleChangeValue }) => {
  const htmlID = `input-${label}`;

  return (
    <>
      <div className={styles["c-text-input"]}>
        <Label label={label} htmlFor={htmlID}/>
        <input type={type} onChange={handleChangeValue} value={value}  name={label} placeholder={placeholder} id={htmlID} className={inputStyles["c-input"]} required/>
      </div>
    </>
  );
}

export {TextInput};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleChangeValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}
