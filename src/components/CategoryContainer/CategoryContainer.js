import categoryContainerStyles from './CategoryContainer.module.css';
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm';
import CategoryNameForm from '../CategoryNameForm/CategoryNameForm';

function CategoryContainer({
  title,
  titleColor,
  children,
  isCreateTaskFormOpen,
  openCreateTaskForm,
  createTask,
  cancelCreateTask,
  openCategoryNameForm,
  isCategoryNameFormOpen,
  onSaveEditCategoryName,
  onCancelEditCategoryName,
}) {
  return (
    <div className={categoryContainerStyles.container}>
      <div className={categoryContainerStyles.titleContainer}>
        {!isCategoryNameFormOpen && (
          <div className={categoryContainerStyles.categoryName}>
            <h2
              className={`${categoryContainerStyles.categoryTitle} ${categoryContainerStyles[titleColor]}`}
            >
              {title}
            </h2>

            <button
              className={categoryContainerStyles.editButton}
              type='button'
              onClick={openCategoryNameForm}
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

      <ul className={categoryContainerStyles.list}>{children}</ul>

      {!isCreateTaskFormOpen && (
        <button
          type='button'
          className={categoryContainerStyles.createTaskButton}
          onClick={openCreateTaskForm}
        >
          Новая задача
        </button>
      )}
      {isCreateTaskFormOpen && (
        <CreateTaskForm cancelCreateTask={cancelCreateTask} createTask={createTask} />
      )}
    </div>
  );
}

export default CategoryContainer;
