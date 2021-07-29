import taskStyles from './Task.module.css';

function Task({ id, children }) {
  return (
    <li className={taskStyles.item}>
      <div className={taskStyles.itemContainer}>
        <input className={taskStyles.checkbox} type='checkbox' id={id} />
        <label className={taskStyles.itemText} htmlFor={id}>
          {children}
        </label>
      </div>
      <button className={taskStyles.deleteTaskButton} type='button' />
    </li>
  );
}

export default Task;
