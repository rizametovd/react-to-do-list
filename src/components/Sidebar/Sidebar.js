import styles from './Sidebar.module.css';
import CreateCategoryPopup from '../CreateCategoryPopup/CreateCategoryPopup';
import CreateCategoryButton from '../CreateCategoryButton/CreateCategoryButton';
import CategoryItem from '../CategoryItem/CategoryItem';

function Sidebar({
  isCreateCategoryPopupOpen,
  openCreateCategoryPopup,
  closeCreateCategoryPopup,
  createCategory,
  removeCategory,
  categories,
}) {

  return (
    <div className={styles.sidebar}>
      {categories.length !== 0 && (
        <>
          <h2 className={styles.title}>Все задачи</h2>

          <ul className={styles.list}>
            {categories.map(({ categoryName, color, id }) => (
              <CategoryItem text={categoryName} taskColor={color} key={id} id={id} removeCategory={removeCategory} />
            ))}
          </ul>
        </>
      )}

      <CreateCategoryButton openCreateCategoryPopup={openCreateCategoryPopup} />
      <CreateCategoryPopup
          isCreateCategoryPopupOpen={isCreateCategoryPopupOpen}
          closeCreateCategoryPopup={closeCreateCategoryPopup}
          createCategory={createCategory}
          id={'sidebar'}
        />
    </div>
  );
}

export default Sidebar;
