import taskStyles from './TaskContainer.module.css';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import FolderNameForm from '../FolderNameForm/FolderNameForm';

function TaskContainer({
  title,
  titleColor,
  children,
  isCreateTask,
  onAddNewTask,
  onCreateTask,
  onCancelCreateTask,
  onEditFolderNameForm,
  isEditFolderNameOpen,
  onSaveEditFolderName,
  onCancelEditFolderName,
}) {
  return (
    <div className={taskStyles.task}>
      <div className={taskStyles.titleContainer}>
        {!isEditFolderNameOpen && (
          <div className={taskStyles.folderName}>
            <h2 className={`${taskStyles.folderTitle} ${taskStyles[titleColor]}`}>{title}</h2>

            <button
              className={taskStyles.editButton}
              type='button'
              onClick={onEditFolderNameForm}
            />
          </div>
        )}

        {isEditFolderNameOpen && (
          <FolderNameForm
            onSaveEditFolderName={onSaveEditFolderName}
            onCancelEditFolderName={onCancelEditFolderName}
          />
        )}
      </div>

      <ul className={taskStyles.list}>{children}</ul>

      {!isCreateTask && (
        <button type='button' className={taskStyles.createTaskButton} onClick={onAddNewTask}>
          Новая задача
        </button>
      )}
      {isCreateTask && (
        <NewTaskForm onCancelCreateTask={onCancelCreateTask} onCreateTask={onCreateTask} />
      )}
    </div>
  );
}

export default TaskContainer;
