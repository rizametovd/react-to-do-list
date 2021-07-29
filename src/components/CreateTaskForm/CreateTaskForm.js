import createTaskFormStyles from './CreateTaskForm.module.css';

function CreateTaskForm({ cancelCreateTask, createTask }) {
  function handleSubmit(e) {
    e.preventDefault();
    createTask();
  }

  return (
    <div className={createTaskFormStyles.container}>
      <form onSubmit={handleSubmit}>
        <input className={createTaskFormStyles.input} placeholder='Текст задачи' required />
        <span className={createTaskFormStyles.validationError}>Текст ошибки валидации</span>
        <div className={createTaskFormStyles.buttonsContainer}>
          <button className={createTaskFormStyles.saveButton} type='submit'>
            Добавить задачу
          </button>
          <button
            className={createTaskFormStyles.cancelButton}
            onClick={cancelCreateTask}
            type='button'
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm;
