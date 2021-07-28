import hamburgerMenuStyles from './HamburgerMenu.module.css';
import CategoryItem from '../CategoryItem/CategoryItem';
import CreateCategoryButton from '../CreateCategoryButton/CreateCategoryButton';
import CreateCategoryPopup from '../CreateCategoryPopup/CreateCategoryPopup';

function HamburgerMenu({ handleHamburgerMenu, isHamburgerMenuOpen, openCreateCategoryPopup, isCreateCategoryPopupOpen, closeCreateCategoryPopup }) {
  return (

      <div className={hamburgerMenuStyles.container}>
      <button className={`${isHamburgerMenuOpen && hamburgerMenuStyles.closeMenuButton} ${hamburgerMenuStyles.button}`} type='button' onClick={handleHamburgerMenu} />
    


        <div className={`${isHamburgerMenuOpen && hamburgerMenuStyles.categoryContainerActive} ${hamburgerMenuStyles.categoryContainer}`}>
          <ul className={hamburgerMenuStyles.list}>
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
        

      </div>
  );
}

export default HamburgerMenu;
