import CategoryContainer from '../CategoryContainer/CategoryContainer';
import styles from './Main.module.css';

function Main({
  isCreateTaskFormOpen,
  openCreateTaskForm,
  cancelCreateTask,
  createTask,
  removeTask,
  markTaskDone,
  isCategoryNameFormOpen,
  openCategoryNameForm,
  onSaveEditCategoryName,
  onCancelEditCategoryName,
  categories,
  tasks,
  changeCategoryName,
}) {
  return (
    <main className={styles.main}>
      {categories.length === 0 ? (
        <span className={styles.noTasksYet}>Задачи отсутствуют</span>
      ) : (
        <ul className={styles.list}>
          {categories.map(({ categoryName, color, id }) => (
            <CategoryContainer
              title={categoryName}
              titleColor={color}
              key={id}
              openCreateTaskForm={openCreateTaskForm}
              isCreateTaskFormOpen={isCreateTaskFormOpen}
              createTask={createTask}
              removeTask={removeTask}
              markTaskDone={markTaskDone}
              cancelCreateTask={cancelCreateTask}
              openCategoryNameForm={openCategoryNameForm}
              isCategoryNameFormOpen={isCategoryNameFormOpen}
              onSaveEditCategoryName={onSaveEditCategoryName}
              onCancelEditCategoryName={onCancelEditCategoryName}
              tasks={tasks}
              categoryId={id}
              changeCategoryName={changeCategoryName}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Main;
