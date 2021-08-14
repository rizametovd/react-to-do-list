import styles from './styles.module.css';

function CategoryItem({ text, taskColor, id, removeCategory }) {


  function handleRemoveCategory() {
    removeCategory(id)
  }

  return (
    <li className={styles.item}>
      <div className={styles.itemContainer}>
        <span className={`${styles.task} ${styles[taskColor]}`}></span>
        <p className={styles.text}>{text}</p>
      </div>

      <button className={styles.deleteCategoryButton} aria-label='Удалить категорию' onClick={handleRemoveCategory}></button>
    </li>
  );
}

export default CategoryItem;
