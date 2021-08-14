import styles from './styles.module.css';
import uuid from 'react-uuid';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import ColorList from '../ColorList/ColorList';
import { useEffect } from 'react';

function CreateCategoryPopup({
  isCreateCategoryPopupOpen,
  closeCreateCategoryPopup,
  createCategory,
  id,
}) {
  const { inputValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  console.log('inputValues:', inputValues)

  useEffect(() => {
    resetForm();
  }, [isCreateCategoryPopupOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    createCategory({
      id: uuid(),
      categoryName: inputValues.name,
      color: inputValues.color,
    });

    closeCreateCategoryPopup();
  }

  return (
    <div className={`${isCreateCategoryPopupOpen && styles.popupIsOpen} ${styles.popup}`}>
      <div className={styles.container}>
        <button
          className={styles.closeButton}
          type='button'
          onClick={closeCreateCategoryPopup}
          aria-label='Закрыть попап'
        ></button>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            name='name'
            type='text'
            className={styles.input}
            placeholder='Название категории'
            minLength='2'
            onChange={handleChange}
            value={inputValues.name || ''}
            required
          />

          <span className={styles.validationError}>{errors.name || ''}</span>

          <ColorList onChange={handleChange} id={id} disabled={!isValid} selectedColor={inputValues.color} />
          <button
            className={`${styles.submitButton} ${!isValid && styles.buttonDisabled}`}
            type='submit'
            disabled={!isValid}
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCategoryPopup;
