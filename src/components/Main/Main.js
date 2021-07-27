import Task from '../Task/Task';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import mainStyles from './Main.module.css';

function Main({
  isCreateTaskFormOpen,
  openCreateTaskForm,
  cancelCreateTask,
  createTask,

  isCategoryNameFormOpen,
  openCategoryNameForm,
  onSaveEditCategoryName,
  onCancelEditCategoryName,
}) {
  return (
    <main className={mainStyles.main}>
      {/* <span className={mainStyles.noTasksYet}>Задачи отсутствуют</span> */}

      <ul className={mainStyles.list}>
        <li className={mainStyles.listItem}>
          <CategoryContainer
            title={'Покупки'}
            titleColor={'green'}
            openCreateTaskForm={openCreateTaskForm}
            isCreateTaskFormOpen={isCreateTaskFormOpen}
            createTask={createTask}
            cancelCreateTask={cancelCreateTask}
            openCategoryNameForm={openCategoryNameForm}
            isCategoryNameFormOpen={isCategoryNameFormOpen}
            onSaveEditCategoryName={onSaveEditCategoryName}
            onCancelEditCategoryName={onCancelEditCategoryName}
          >
            <Task id={1}>Макарошки</Task>
            <Task id={2}>Картошку</Task>
            <Task id={3}>Биткоины</Task>
          </CategoryContainer>
        </li>
        <li className={mainStyles.listItem}>
          <CategoryContainer
            title={'Фронтенд'}
            titleColor={'blue'}
            openCreateTaskForm={openCreateTaskForm}
            isCreateTaskFormOpen={isCreateTaskFormOpen}
            cancelCreateTask={cancelCreateTask}
            createTask={createTask}
            openCategoryNameForm={openCategoryNameForm}
            isCategoryNameFormOpen={isCategoryNameFormOpen}
            onSaveEditCategoryName={onSaveEditCategoryName}
            onCancelEditCategoryName={onCancelEditCategoryName}
          >
            <Task id={4}>Изучить JavaScript</Task>
            <Task id={5}>Изучить паттерны проектирования</Task>
            <Task id={6}>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</Task>
            <Task id={7}>Redux (redux-observable, redux-saga)</Task>
          </CategoryContainer>
        </li>
        <li className={mainStyles.listItem}>
          <CategoryContainer
            title={'Фильмы'}
            titleColor={'pink'}
            openCreateTaskForm={openCreateTaskForm}
            isCreateTaskFormOpen={isCreateTaskFormOpen}
            cancelCreateTask={cancelCreateTask}
            createTask={createTask}
            openCategoryNameForm={openCategoryNameForm}
            isCategoryNameFormOpen={isCategoryNameFormOpen}
            onSaveEditCategoryName={onSaveEditCategoryName}
            onCancelEditCategoryName={onCancelEditCategoryName}
          >
            <Task id={8}>Зеленая миля</Task>
            <Task id={9}>Довод</Task>
            <Task id={10}>Конг против Годзиллы</Task>
            <Task id={11}>Рик и Морти</Task>
          </CategoryContainer>
        </li>
        <li className={mainStyles.listItem}>
          <CategoryContainer
            title={'Книги'}
            titleColor={'lightgreen'}
            openCreateTaskForm={openCreateTaskForm}
            isCreateTaskFormOpen={isCreateTaskFormOpen}
            cancelCreateTask={cancelCreateTask}
            createTask={createTask}
            openCategoryNameForm={openCategoryNameForm}
            isCategoryNameFormOpen={isCategoryNameFormOpen}
            onSaveEditCategoryName={onSaveEditCategoryName}
            onCancelEditCategoryName={onCancelEditCategoryName}
          >
            <Task id={12}>Learn JavaScript</Task>
            <Task id={13}>Выразительный JavaScript</Task>
          </CategoryContainer>
        </li>
        <li className={mainStyles.listItem}>
          <CategoryContainer
            title={'Личное'}
            titleColor={'gray'}
            openCreateTaskForm={openCreateTaskForm}
            isCreateTaskFormOpen={isCreateTaskFormOpen}
            cancelCreateTask={cancelCreateTask}
            createTask={createTask}
            openCategoryNameForm={openCategoryNameForm}
            isCategoryNameFormOpen={isCategoryNameFormOpen}
            onSaveEditCategoryName={onSaveEditCategoryName}
            onCancelEditCategoryName={onCancelEditCategoryName}
          >
            <Task id={14}>Сделать To Do List</Task>
          </CategoryContainer>
        </li>

        <li className={mainStyles.listItem}>
          <CategoryContainer
            title={'Игры'}
            titleColor={'purple'}
            openCreateTaskForm={openCreateTaskForm}
            isCreateTaskFormOpen={isCreateTaskFormOpen}
            createTask={createTask}
            cancelCreateTask={cancelCreateTask}
            openCategoryNameForm={openCategoryNameForm}
            isCategoryNameFormOpen={isCategoryNameFormOpen}
            onSaveEditCategoryName={onSaveEditCategoryName}
            onCancelEditCategoryName={onCancelEditCategoryName}
          ></CategoryContainer>
        </li>
      </ul>
    </main>
  );
}

export default Main;
