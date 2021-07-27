import createCategoryButtonStyles from './CreateCategoryButton.module.css';

function CreateCategoryButton({ openCreateCategoryPopup }) {
  return (
    <div className={createCategoryButtonStyles.container}>
      <button
        className={createCategoryButtonStyles.button}
        type='button'
        onClick={openCreateCategoryPopup}
      >
        Добавить папку
      </button>
    </div>
  );
}

export default CreateCategoryButton;
