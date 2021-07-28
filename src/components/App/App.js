import { useState } from 'react';
import '../../vendor/normalize.css';
import CreateCategoryPopup from '../CreateCategoryPopup/CreateCategoryPopup';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import appStyles from './App.module.css';

function App() {
  const [isCreateCategoryPopupOpen, setIsCreateCategoryPopupOpen] = useState(false);
  const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);
  const [isCategoryNameFormOpen, setIsCategoryNameFormOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  function handleHamburgerMenu() {
    setIsHamburgerMenuOpen((prevState) => !prevState);
  }

  function openCategoryNameForm() {
    setIsCategoryNameFormOpen(true);
  }

  function onSaveEditCategoryName() {
    setIsCategoryNameFormOpen(false);
  }

  function onCancelEditCategoryName() {
    setIsCategoryNameFormOpen(false);
  }

  function openCreateTaskForm() {
    setIsCreateTaskFormOpen(true);
  }

  function createTask() {
    setIsCreateTaskFormOpen(false);
  }

  function cancelCreateTask() {
    setIsCreateTaskFormOpen(false);
  }

  function openCreateCategoryPopup() {
    console.log('Клик')
    setIsCreateCategoryPopupOpen(true);
  }

  function closePopup() {
    setIsCreateCategoryPopupOpen(false);
  }

  return (
    <div className={appStyles.page}>
      <HamburgerMenu
        handleHamburgerMenu={handleHamburgerMenu}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        openCreateCategoryPopup={openCreateCategoryPopup}
        isCreateCategoryPopupOpen={isCreateCategoryPopupOpen}
        closeCreateCategoryPopup={closePopup}
      />
      <Sidebar
        isCreateCategoryPopupOpen={isCreateCategoryPopupOpen}
        openCreateCategoryPopup={openCreateCategoryPopup}
        closeCreateCategoryPopup={closePopup}
      />
      <Main
        isCreateTaskFormOpen={isCreateTaskFormOpen}
        openCreateTaskForm={openCreateTaskForm}
        createTask={createTask}
        cancelCreateTask={cancelCreateTask}
        openCategoryNameForm={openCategoryNameForm}
        isCategoryNameFormOpen={isCategoryNameFormOpen}
        onSaveEditCategoryName={onSaveEditCategoryName}
        onCancelEditCategoryName={onCancelEditCategoryName}
      />
    </div>


  );
}

export default App;
