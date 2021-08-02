import styles from './CategoryNameForm.module.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function CategoryNameForm({ onSaveEditCategoryName, onCancelEditCategoryName }) {
  const { inputValues, handleChange, errors, isValid } = useFormWithValidation();
  console.log(errors);

  function handleSubmit(e) {
    e.preventDefault();
    onSaveEditCategoryName(inputValues.editCategoryName);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.inputContainer}>
        <input className={styles.input} onChange={handleChange} name='editCategoryName' minLength='5' required/>
        <span className={styles.validationError}>{errors.editCategoryName}</span>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={`${styles.saveButton} ${!isValid && styles.buttonDisabled}`} type='submit'>
          Сохранить
        </button>
        <button className={styles.cancelButton} type='button' onClick={onCancelEditCategoryName} disabled={!isValid}>
          Отмена
        </button>
      </div>
    </form>
  );
}

export default CategoryNameForm;
