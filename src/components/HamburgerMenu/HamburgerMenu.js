import hamburgerMenuStyles from './HamburgerMenu.module.css';
import CategoryItem from '../CategoryItem/CategoryItem';

function HamburgerMenu({ handleHamburgerMenu, isHamburgerMenuOpen }) {
  return (
    <div className={hamburgerMenuStyles.container}>
      <button className={`${isHamburgerMenuOpen && hamburgerMenuStyles.closeMenuButton} ${hamburgerMenuStyles.button}`} type='button' onClick={handleHamburgerMenu}>
        Меню
      </button>

      {isHamburgerMenuOpen && (
        <div className={hamburgerMenuStyles.categoryContainer}>
          <ul className={hamburgerMenuStyles.list}>
            <CategoryItem text={'Покупки'} taskColor={'green'} />
            <CategoryItem text={'Фронтенд'} taskColor={'blue'} />
            <CategoryItem text={'Фильмы'} taskColor={'pink'} />
            <CategoryItem text={'Книги'} taskColor={'lightgreen'} />
            <CategoryItem text={'Личное'} taskColor={'gray'} />
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
