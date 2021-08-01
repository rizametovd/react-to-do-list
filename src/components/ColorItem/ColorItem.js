import styles from './ColorItem.module.css';

function ColorItem({ color, onChange, id, disabled }) {
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
      />
      <label htmlFor={id} />
    </li>
  );
}

export default ColorItem;
