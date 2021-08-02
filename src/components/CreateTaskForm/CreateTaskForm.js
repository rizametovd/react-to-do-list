import styles from './CreateTaskForm.module.css';
import uuid from 'react-uuid';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function CreateTaskForm({ cancelCreateTask, onSaveCreateTask, categoryId }) {
  const { inputValues, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSaveCreateTask({
      catId: categoryId,
      task: inputValues.task,
      isDone: false,
      id: uuid(),
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name='task'
          placeholder='Текст задачи'
          onChange={handleChange}
          minLength='5'
          required
        />
        <span className={styles.validationError}>{errors.task || ''}</span>
        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.saveButton} ${!isValid && styles.buttonDisabled}`}
            type='submit'
            disabled={!isValid}
          >
            Добавить задачу
          </button>
          <button className={styles.cancelButton} onClick={cancelCreateTask} type='button'>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm;
