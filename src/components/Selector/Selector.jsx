import PropTypes from 'prop-types';
import styles from './Selector.module.css';
import inputStyles from "../common/css/Input.module.css";
import { Label } from '../Label';

const Selector = ({label, itens, selected, handleChangeValue}) => {
  const htmlID = `select-${ label }`;

  return <div className={styles['c-selector']}>
    <Label label={label} htmlFor={htmlID}/>
    <select value={selected} onChange={handleChangeValue} className={inputStyles["c-input"]} name={label} id={htmlID}>
      <option value="" disabled hidden>Selecione uma opção</option>
      {itens.map(({name}, index) => {
        return <option value={name} key={`${name}-${index}`}>{name}</option>
      })}
    </select>
  </div>
};

Selector.propTypes = {
  label: PropTypes.string.isRequired,
  itens: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  handleChangeValue: PropTypes.func.isRequired
}
export {Selector};
