import folderNameFormStyles from './FolderNameForm.module.css';

function FolderNameForm({ onSaveEditFolderName, onCancelEditFolderName }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSaveEditFolderName();
  }
  return (
    <form className={folderNameFormStyles.form} onSubmit={handleSubmit}>
      <input className={folderNameFormStyles.input} />
      <div className={folderNameFormStyles.buttonsContainer}>
        <button className={folderNameFormStyles.saveButton} type='submit'>
          Сохранить
        </button>
        <button
          className={folderNameFormStyles.cancelButton}
          type='button'
          onClick={onCancelEditFolderName}
        >
          Отмена
        </button>
      </div>
    </form>
  );
}

export default FolderNameForm;
