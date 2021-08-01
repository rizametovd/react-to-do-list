import styles from './ColorList.module.css';
import { COLORS } from '../../utils/constants';
import ColorItem from '../ColorItem/ColorItem';

function ColorList({ onChange, id, disabled, }) {
  return (
    <ul className={styles.list}>
      {COLORS.map((el, idx) => (
        <ColorItem onChange={onChange} color={el} key={idx} id={`${id + idx}`} disabled={disabled} />
      ))}
    </ul>
  );
}

export default ColorList;
