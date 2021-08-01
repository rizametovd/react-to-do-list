import '../../vendor/normalize.css';
import { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import styles from './App.module.css';

function App() {
  const [isCreateCategoryPopupOpen, setIsCreateCategoryPopupOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  // console.log('popup:', isCreateCategoryPopupOpen);
  // console.log('categories:', categories);
  // console.log('tasks:', tasks);

  function createTask(inputValue) {
    setTasks((prevState) => [...prevState, inputValue]);
  }

  function removeTask(id) {
    setTasks((prevState) => prevState.filter((el) => el.id !== id));
  }

  function markTaskDone(data) {
    console.log(data);
    const { id, checked } = data;
    setTasks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item))
    );
  }

  function createCategory(categoryData) {
    setCategories((prevState) => [...prevState, categoryData]);
  }

  function removeCategory(id) {
    setCategories((prevState) => prevState.filter((el) => el.id !== id));
  }

  function changeCategoryName(inputValueData) {
    const { categoryId, inputValue } = inputValueData;

    setCategories((prev) =>
      prev.map((toDoItem) =>
        toDoItem.id === categoryId
          ? {
              ...toDoItem,
              categoryName: inputValue,
            }
          : toDoItem
      )
    );
  }

  function openCreateCategoryPopup(e) {
    setIsCreateCategoryPopupOpen(true);
  }

  function closePopup() {
    setIsCreateCategoryPopupOpen(false);
  }

  return (
    <div className={styles.page}>
      <HamburgerMenu
        openCreateCategoryPopup={openCreateCategoryPopup}
        closeCreateCategoryPopup={closePopup}
        isCreateCategoryPopupOpen={isCreateCategoryPopupOpen}
        createCategory={createCategory}
        categories={categories}
      />
      <Sidebar
        openCreateCategoryPopup={openCreateCategoryPopup}
        closeCreateCategoryPopup={closePopup}
        isCreateCategoryPopupOpen={isCreateCategoryPopupOpen}
        createCategory={createCategory}
        removeCategory={removeCategory}
        categories={categories}
      />
      <Main
        categories={categories}
        createTask={createTask}
        removeTask={removeTask}
        markTaskDone={markTaskDone}
        tasks={tasks}
        changeCategoryName={changeCategoryName}
      />
    </div>
  );
}

export default App;
