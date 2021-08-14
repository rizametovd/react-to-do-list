import styles from './styles.module.css';
import { COLORS } from '../../utils/constants';
import ColorItem from '../ColorItem/ColorItem';

function ColorList({ onChange, id, disabled, selectedColor }) {
  return (
    <ul className={styles.list}>
      {COLORS.map((el, idx) => (
        <ColorItem onChange={onChange} color={el} key={idx} id={`${id + idx}`} disabled={disabled} selectedColor={selectedColor} />
      ))}
    </ul>
  );
}

export default ColorList;
