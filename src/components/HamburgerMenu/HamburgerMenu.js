import styles from './styles.module.css';
import CategoryItem from '../CategoryItem/CategoryItem';
import CreateCategoryButton from '../CreateCategoryButton/CreateCategoryButton';
import CreateCategoryPopup from '../CreateCategoryPopup/CreateCategoryPopup';
import { useState } from 'react';

function HamburgerMenu({
  createCategory,
  openCreateCategoryPopup,
  isCreateCategoryPopupOpen,
  closeCreateCategoryPopup,
  categories,
}) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  function handleHamburgerMenu() {
    setIsHamburgerMenuOpen((prevState) => !prevState);
  }

  return (
    <div className={styles.container}>
      <button
        className={`${isHamburgerMenuOpen && styles.closeMenuButton} ${styles.button}`}
        type='button'
        onClick={handleHamburgerMenu}
        aria-label='Открыть или закрыть меню'
      />

      <div
        className={`${isHamburgerMenuOpen && styles.categoryContainerActive} ${
          styles.categoryContainer
        }`}
      >
        <ul className={styles.list}>
          {categories.map(({ categoryName, id, color }) => (
            <CategoryItem text={categoryName} key={id} taskColor={color} />
          ))}
        </ul>
        <CreateCategoryButton openCreateCategoryPopup={openCreateCategoryPopup} />
        <CreateCategoryPopup
          isCreateCategoryPopupOpen={isCreateCategoryPopupOpen}
          closeCreateCategoryPopup={closeCreateCategoryPopup}
          createCategory={createCategory}
          id={'mobile'}
        />
      </div>
    </div>
  );
}

export default HamburgerMenu;
