import sidebarStyles from './Sidebar.module.css';
import AddFolderPopup from '../AddFolderPopup/AddFolderPopup';
import NewFolderBtn from '../NewFolderBtn/NewFolderBtn';
import TaskFolder from '../TaskFolder/TaskFolder';


function Sidebar({ isPopupOpen, onAddFolder, onClose }) {
  return (
    <div className={sidebarStyles.sidebar}>
      <h2 className={sidebarStyles.title}>Все задачи</h2>

      <ul className={sidebarStyles.list}>
        <TaskFolder text={'Покупки'} taskColor={'green'} />
        <TaskFolder text={'Фронтенд'} taskColor={'blue'} />
        <TaskFolder text={'Фильмы'} taskColor={'pink'} />
        <TaskFolder text={'Книги'} taskColor={'lightgreen'} />
        <TaskFolder text={'Личное'} taskColor={'gray'} />
      </ul>

      <NewFolderBtn onAddFolder={onAddFolder} />
      <AddFolderPopup isPopupOpen={isPopupOpen} onClose={onClose} />
    </div>
  );
}

export default Sidebar;
