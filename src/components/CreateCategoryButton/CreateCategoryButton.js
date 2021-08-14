import styles from './styles.module.css';

function CreateCategoryButton({ openCreateCategoryPopup }) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type='button'
        onClick={openCreateCategoryPopup}
      >
        Добавить папку
      </button>
    </div>
  );
}

export default CreateCategoryButton;
