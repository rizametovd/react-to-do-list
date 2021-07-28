import createCategoryPopupStyles from './CreateCategoryPopup.module.css';

function CreateCategoryPopup({ isCreateCategoryPopupOpen, closeCreateCategoryPopup }) {
  function handleSubmit(e) {
    e.preventDefault();
    closeCreateCategoryPopup();
  }

  return (
    <div
      className={`${isCreateCategoryPopupOpen && createCategoryPopupStyles.popupIsOpen} ${
        createCategoryPopupStyles.popup
      }`}
    >
      <div className={createCategoryPopupStyles.container}>
        <button
          className={createCategoryPopupStyles.closeButton}
          type='button'
          onClick={closeCreateCategoryPopup}
        ></button>
        <form className={createCategoryPopupStyles.form} onSubmit={handleSubmit}>
          <input
            type='text'
            className={createCategoryPopupStyles.input}
            placeholder='Название папки'
            required
          />
          <span className={createCategoryPopupStyles.validationError}>Текст ошибки валидации</span>
          <ul className={createCategoryPopupStyles.list}>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorGreen}`}
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorBlue}`}
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorPink}`}
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorLightGreen}`}
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorGray}`}
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorPurple}`}
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorRed}`}
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorBlack}`}
              ></button>
            </li>
          </ul>
          <button className={createCategoryPopupStyles.addColorButton} type='submit'>
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCategoryPopup;
