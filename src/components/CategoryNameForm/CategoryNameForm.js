import { useState } from 'react';
import styles from './CategoryNameForm.module.css';

function CategoryNameForm({ onSaveEditCategoryName, onCancelEditCategoryName }) {
  const [inputValues, setInputValues] = useState('');

  function handleInput(e) {
    setInputValues(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSaveEditCategoryName(inputValues);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} onChange={handleInput} />
      <div className={styles.buttonsContainer}>
        <button className={styles.saveButton} type='submit'>
          Сохранить
        </button>
        <button className={styles.cancelButton} type='button' onClick={onCancelEditCategoryName}>
          Отмена
        </button>
      </div>
    </form>
  );
}

export default CategoryNameForm;
