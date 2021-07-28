import categoryItemStyles from './CategoryItem.module.css';

function CategoryItem({ text, taskColor }) {
  return (
    <li className={categoryItemStyles.item}>
      <div className={categoryItemStyles.itemContainer}>
        <span className={`${categoryItemStyles.task} ${categoryItemStyles[taskColor]}`}></span>
        <p className={categoryItemStyles.text}>{text}</p>
      </div>

      <button className={categoryItemStyles.deleteCategoryButton}></button>
    </li>
  );
}

export default CategoryItem;
