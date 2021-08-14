import styles from './styles.module.css';

function ColorItem({ color, onChange, id, disabled, selectedColor }) {

  return (
    <li>
      <input
        type='radio'
        className={`${styles.radio} ${!disabled ? styles[color] : styles.radioDisabled}`}
        id={id}
        name='color'
        value={color}
        onChange={onChange}
        disabled={disabled}
        checked={color === selectedColor}
      />
      <label htmlFor={id} />
    </li>
  );
}

export default ColorItem;
