import Task from '../Task/Task';
import TaskContainer from '../TaskContainer/TaskContainer';
import mainStyles from './Main.module.css';

function Main({
  isCreateTask,
  onAddNewTask,
  onCancelCreateTask,
  onCreateTask,
  onEditFolderNameForm,
  isEditFolderNameOpen,
  onSaveEditFolderName,
  onCancelEditFolderName,
}) {
  return (
    <main className={mainStyles.main}>
      {/* <span className={mainStyles.noTasksYet}>Задачи отсутствуют</span> */}

      <ul className={mainStyles.list}>
        <li className={mainStyles.listItem}>
          <TaskContainer
            title={'Покупки'}
            titleColor={'green'}
            onAddNewTask={onAddNewTask}
            isCreateTask={isCreateTask}
            onCreateTask={onCreateTask}
            onCancelCreateTask={onCancelCreateTask}
            onEditFolderNameForm={onEditFolderNameForm}
            isEditFolderNameOpen={isEditFolderNameOpen}
            onSaveEditFolderName={onSaveEditFolderName}
            onCancelEditFolderName={onCancelEditFolderName}
          >
            <Task id={1}>Макарошки</Task>
            <Task id={2}>Картошку</Task>
            <Task id={3}>Биткоины</Task>
          </TaskContainer>
        </li>
        <li className={mainStyles.listItem}>
          <TaskContainer
            title={'Фронтенд'}
            titleColor={'blue'}
            onAddNewTask={onAddNewTask}
            isCreateTask={isCreateTask}
            onCancelCreateTask={onCancelCreateTask}
            onCreateTask={onCreateTask}
            onEditFolderNameForm={onEditFolderNameForm}
            isEditFolderNameOpen={isEditFolderNameOpen}
            onSaveEditFolderName={onSaveEditFolderName}
            onCancelEditFolderName={onCancelEditFolderName}
          >
            <Task id={4}>Изучить JavaScript</Task>
            <Task id={5}>Изучить паттерны проектирования</Task>
            <Task id={6}>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</Task>
            <Task id={7}>Redux (redux-observable, redux-saga)</Task>
          </TaskContainer>
        </li>
        <li className={mainStyles.listItem}>
          <TaskContainer
            title={'Фильмы'}
            titleColor={'pink'}
            onAddNewTask={onAddNewTask}
            isCreateTask={isCreateTask}
            onCancelCreateTask={onCancelCreateTask}
            onCreateTask={onCreateTask}
            onEditFolderNameForm={onEditFolderNameForm}
            isEditFolderNameOpen={isEditFolderNameOpen}
            onSaveEditFolderName={onSaveEditFolderName}
            onCancelEditFolderName={onCancelEditFolderName}
          >
            <Task id={8}>Зеленая миля</Task>
            <Task id={9}>Довод</Task>
            <Task id={10}>Конг против Годзиллы</Task>
            <Task id={11}>Рик и Морти</Task>
          </TaskContainer>
        </li>
        <li className={mainStyles.listItem}>
          <TaskContainer
            title={'Книги'}
            titleColor={'lightgreen'}
            onAddNewTask={onAddNewTask}
            isCreateTask={isCreateTask}
            onCancelCreateTask={onCancelCreateTask}
            onCreateTask={onCreateTask}
            onEditFolderNameForm={onEditFolderNameForm}
            isEditFolderNameOpen={isEditFolderNameOpen}
            onSaveEditFolderName={onSaveEditFolderName}
            onCancelEditFolderName={onCancelEditFolderName}
          >
            <Task id={12}>Learn JavaScript</Task>
            <Task id={13}>Выразительный JavaScript</Task>
          </TaskContainer>
        </li>
        <li className={mainStyles.listItem}>
          <TaskContainer
            title={'Личное'}
            titleColor={'gray'}
            onAddNewTask={onAddNewTask}
            isCreateTask={isCreateTask}
            onCancelCreateTask={onCancelCreateTask}
            onCreateTask={onCreateTask}
            onEditFolderNameForm={onEditFolderNameForm}
            isEditFolderNameOpen={isEditFolderNameOpen}
            onSaveEditFolderName={onSaveEditFolderName}
            onCancelEditFolderName={onCancelEditFolderName}
          >
            <Task id={14}>Сделать To Do List</Task>
          </TaskContainer>
        </li>

        <li className={mainStyles.listItem}>
          <TaskContainer
            title={'Игры'}
            titleColor={'purple'}
            onAddNewTask={onAddNewTask}
            isCreateTask={isCreateTask}
            onCreateTask={onCreateTask}
            onCancelCreateTask={onCancelCreateTask}
            onEditFolderNameForm={onEditFolderNameForm}
            isEditFolderNameOpen={isEditFolderNameOpen}
            onSaveEditFolderName={onSaveEditFolderName}
            onCancelEditFolderName={onCancelEditFolderName}
          ></TaskContainer>
        </li>
      </ul>
    </main>
  );
}

export default Main;
