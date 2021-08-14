import styles from './styles.module.css';
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm';
import CategoryNameForm from '../CategoryNameForm/CategoryNameForm';
import { useState } from 'react';
import Task from '../Task/Task';

function CategoryContainer({
  title,
  titleColor,
  createTask,
  tasks,
  categoryId,
  removeTask,
  changeCategoryName,
  markTaskDone,
}) {
  const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);
  const [isCategoryNameFormOpen, setIsCategoryNameFormOpen] = useState(false);

  function onSaveCreateTask(data) {
    createTask(data);
    setIsCreateTaskFormOpen(false);
  }

  function openCreateTaskForm() {
    setIsCreateTaskFormOpen(true);
  }

  function cancelCreateTask() {
    setIsCreateTaskFormOpen(false);
  }

  function openCategoryNameForm() {
    setIsCategoryNameFormOpen(true);
  }

  function onSaveEditCategoryName(inputValue) {
    changeCategoryName({ inputValue, categoryId });
    setIsCategoryNameFormOpen(false);
  }

  function onCancelEditCategoryName() {
    setIsCategoryNameFormOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {!isCategoryNameFormOpen && (
          <div className={styles.categoryName}>
            <h2 className={`${styles.categoryTitle} ${styles[titleColor]}`}>{title}</h2>

            <button
              className={styles.editButton}
              type='button'
              onClick={openCategoryNameForm}
              aria-label='Изменить название категории'
            />
          </div>
        )}

        {isCategoryNameFormOpen && (
          <CategoryNameForm
            onSaveEditCategoryName={onSaveEditCategoryName}
            onCancelEditCategoryName={onCancelEditCategoryName}
          />
        )}
      </div>

      <ul className={styles.list}>
        {tasks.map(({ task, id, isDone, catId }) => {
          if (catId === categoryId) {
            return (
              <Task key={id} id={id} removeTask={removeTask} markTaskDone={markTaskDone} isDone={isDone}>
                {task}
              </Task>
            );
          }

          return '';
        })}
      </ul>

      {!isCreateTaskFormOpen && (
        <button type='button' className={styles.createTaskButton} onClick={openCreateTaskForm}>
          Новая задача
        </button>
      )}
      {isCreateTaskFormOpen && (
        <CreateTaskForm
          cancelCreateTask={cancelCreateTask}
          createTask={createTask}
          onSaveCreateTask={onSaveCreateTask}
          categoryId={categoryId}
        />
      )}
    </div>
  );
}

export default CategoryContainer;
