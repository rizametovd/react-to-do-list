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
          aria-label='Закрыть попап'
        ></button>
        <form className={createCategoryPopupStyles.form} onSubmit={handleSubmit}>
          <input
            type='text'
            className={createCategoryPopupStyles.input}
            placeholder='Название категории'
            required
          />
          <span className={createCategoryPopupStyles.validationError}>Текст ошибки валидации</span>
          <ul className={createCategoryPopupStyles.list}>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorGreen}`}
                aria-label='Зеленый'
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorBlue}`}
                aria-label='Голубой'
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorPink}`}
                aria-label='Розовый'
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorLightGreen}`}
                aria-label='Светло-Зеленый'
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorGray}`}
                aria-label='Серый'
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorPurple}`}
                aria-label='Фиолетовый'
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorRed}`}
                aria-label='Красный'
              ></button>
            </li>
            <li className={createCategoryPopupStyles.listItem}>
              <button
                type='button'
                className={`${createCategoryPopupStyles.colorButton} ${createCategoryPopupStyles.colorBlack}`}
                aria-label='Черный'
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
