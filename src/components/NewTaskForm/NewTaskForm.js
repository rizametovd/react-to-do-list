import newTaskFormStyles from './NewTaskForm.module.css';

function NewTaskForm({ onCancelCreateTask, onCreateTask }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCreateTask();
  }

  return (
    <div className={newTaskFormStyles.container}>
      <form onSubmit={handleSubmit}>
        <input className={newTaskFormStyles.input} placeholder='Текст задачи' required />
        <span className={newTaskFormStyles.validationError}>Текст ошибки валидации</span>
        <div className={newTaskFormStyles.buttonsContainer}>
          <button className={newTaskFormStyles.saveButton} type='submit'>
            Добавить задачу
          </button>
          <button
            className={newTaskFormStyles.cancelButton}
            onClick={onCancelCreateTask}
            type='button'
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTaskForm;
