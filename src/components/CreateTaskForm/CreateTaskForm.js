import { useState } from 'react';
import styles from './CreateTaskForm.module.css';
import uuid from 'react-uuid';

function CreateTaskForm({ cancelCreateTask, onSaveCreateTask, categoryId }) {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSaveCreateTask({
      catId: categoryId,
      task:inputValue,
      isDone: false,
      id: uuid(),
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input className={styles.input} placeholder='Текст задачи' onChange={handleInput} required />
        <span className={styles.validationError}>Текст ошибки валидации</span>
        <div className={styles.buttonsContainer}>
          <button className={styles.saveButton} type='submit'>
            Добавить задачу
          </button>
          <button
            className={styles.cancelButton}
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
