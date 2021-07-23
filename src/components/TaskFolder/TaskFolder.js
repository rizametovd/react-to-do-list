import taskFolderStyles from './TaskFolder.module.css';

function TaskFolder({ text, taskColor }) {
  return (
    <li className={taskFolderStyles.item}>
      <div className={taskFolderStyles.itemContainer}>
        <span className={`${taskFolderStyles.task} ${taskFolderStyles[taskColor]}`}></span>
        <p className={taskFolderStyles.text}>{text}</p>
      </div>

      <button className={taskFolderStyles.button}></button>
    </li>
  );
}

export default TaskFolder;
