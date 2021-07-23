import addFolderPopupStyles from './AddFolderPopup.module.css';

function AddFolderPopup({ isPopupOpen, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    onClose();
  }

  return (
    <div
      className={`${isPopupOpen && addFolderPopupStyles.popupActive} ${
        addFolderPopupStyles.container
      }`}
    >
      <button className={addFolderPopupStyles.closeButton} type='button' onClick={onClose}></button>
      <form className={addFolderPopupStyles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          className={addFolderPopupStyles.input}
          placeholder='Название папки'
          required
        />
        <span className={addFolderPopupStyles.validationError}>Текст ошибки валидации</span>
        <ul className={addFolderPopupStyles.list}>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorGreen}`}
            ></button>
          </li>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorBlue}`}
            ></button>
          </li>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorPink}`}
            ></button>
          </li>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorLightGreen}`}
            ></button>
          </li>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorGray}`}
            ></button>
          </li>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorPurple}`}
            ></button>
          </li>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorRed}`}
            ></button>
          </li>
          <li className={addFolderPopupStyles.listItem}>
            <button type='button'
              className={`${addFolderPopupStyles.colorButton} ${addFolderPopupStyles.colorBlack}`}
            ></button>
          </li>
        </ul>
        <button className={addFolderPopupStyles.addColorButton} type='submit'>
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddFolderPopup;
