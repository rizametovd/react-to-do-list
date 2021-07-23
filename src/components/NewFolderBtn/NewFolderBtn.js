import newFolderBtnStyles from './NewFolderBtn.module.css';

function NewFolderBtn({ onAddFolder }) {
  return (
    <div className={newFolderBtnStyles.container}>
      <button className={newFolderBtnStyles.button} type='button' onClick={onAddFolder}>
        Добавить папку
      </button>
    </div>
  );
}

export default NewFolderBtn;
