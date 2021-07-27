import categoryNameFormStyles from './CategoryNameForm.module.css';

function CategoryNameForm({ onSaveEditCategoryName, onCancelEditCategoryName }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSaveEditCategoryName();
  }
  return (
    <form className={categoryNameFormStyles.form} onSubmit={handleSubmit}>
      <input className={categoryNameFormStyles.input} />
      <div className={categoryNameFormStyles.buttonsContainer}>
        <button className={categoryNameFormStyles.saveButton} type='submit'>
          Сохранить
        </button>
        <button
          className={categoryNameFormStyles.cancelButton}
          type='button'
          onClick={onCancelEditCategoryName}
        >
          Отмена
        </button>
      </div>
    </form>
  );
}

export default CategoryNameForm;
