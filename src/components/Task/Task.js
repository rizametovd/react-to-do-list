import styles from './styles.module.css';

function Task({ id, children, removeTask, markTaskDone, isDone }) {
  function handleRemoveTask() {
    removeTask(id);
  }

  function handleRadioInput() {
    markTaskDone({ id });
  }

  return (
    <li className={styles.item}>
      <div className={styles.itemContainer}>
        <input
          className={styles.checkbox}
          type='checkbox'
          id={id}
          checked={isDone}
          onChange={handleRadioInput}
        />
        <label className={styles.itemText} htmlFor={id}>
          {children}
        </label>
      </div>
      <button className={styles.deleteTaskButton} type='button' onClick={handleRemoveTask} />
    </li>
  );
}

export default Task;
