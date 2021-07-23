import { useState } from 'react';
import '../../vendor/normalize.css';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import appStyles from './App.module.css';

function App() {
  const [isAddFolderPopupOpen, setIsAddFolderPopupOpen] = useState(false);
  const [isCreateTask, setIsCreateTask] = useState(false);
  const [isEditFolderNameOpen, setIsEditFolderNameOpen] = useState(false);

  function openEditFolderNameForm() {
    setIsEditFolderNameOpen(true);
  }

  function saveEditFolderName() {
    setIsEditFolderNameOpen(false);
  }

  function cancelEditFolderName() {
    setIsEditFolderNameOpen(false);
  }

  function addNewTask() {
    setIsCreateTask(true);
  }

  function createTask() {
    setIsCreateTask(false);
  }

  function cancelCreateTask() {
    setIsCreateTask(false);
  }

  function openAddFolderPopup() {
    setIsAddFolderPopupOpen(true);
  }

  function closePopup() {
    setIsAddFolderPopupOpen(false);
  }

  return (
    <div className={appStyles.page}>
      <Sidebar
        isPopupOpen={isAddFolderPopupOpen}
        onAddFolder={openAddFolderPopup}
        onClose={closePopup}
      />
      <Main
        isCreateTask={isCreateTask}
        onAddNewTask={addNewTask}
        onCreateTask={createTask}
        onCancelCreateTask={cancelCreateTask}
        onEditFolderNameForm={openEditFolderNameForm}
        isEditFolderNameOpen={isEditFolderNameOpen}
        onSaveEditFolderName={saveEditFolderName}
        onCancelEditFolderName={cancelEditFolderName}
      />
    </div>
  );
}

export default App;
