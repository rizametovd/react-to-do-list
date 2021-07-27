import sidebarStyles from './Sidebar.module.css';
import CreateCategoryPopup from '../CreateCategoryPopup/CreateCategoryPopup';
import CreateCategoryButton from '../CreateCategoryButton/CreateCategoryButton';
import CategoryItem from '../CategoryItem/CategoryItem';

function Sidebar({ isCreateCategoryPopupOpen, openCreateCategoryPopup, closeCreateCategoryPopup }) {
  return (
    <div className={sidebarStyles.sidebar}>
      <h2 className={sidebarStyles.title}>Все задачи</h2>

      <ul className={sidebarStyles.list}>
        <CategoryItem text={'Покупки'} taskColor={'green'} />
        <CategoryItem text={'Фронтенд'} taskColor={'blue'} />
        <CategoryItem text={'Фильмы'} taskColor={'pink'} />
        <CategoryItem text={'Книги'} taskColor={'lightgreen'} />
        <CategoryItem text={'Личное'} taskColor={'gray'} />
      </ul>

      <CreateCategoryButton openCreateCategoryPopup={openCreateCategoryPopup} />
      <CreateCategoryPopup
        isCreateCategoryPopupOpen={isCreateCategoryPopupOpen}
        closeCreateCategoryPopup={closeCreateCategoryPopup}
      />
    </div>
  );
}

export default Sidebar;
