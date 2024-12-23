import { useState } from 'react';
import EnterUserForm from './components/UsersEnteryForm/EnterUserForm';
import UserList from './components/UserList/UserList';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const addOrUpdateUser = (user) => {
    if (editUser) {
      // Update user
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u === editUser ? user : u))
      );
      setEditUser(null);
    } else {
      // Add new user
      setUsers((prevUsers) => [...prevUsers, user]);
    }
  };
  const handleEdit = (user) => {
    setEditUser(user);
  };
  return (
    <>
      <EnterUserForm onUserSubmit={addOrUpdateUser} editUser={editUser} />
      <UserList users={users} setUsers={setUsers} onEdit={handleEdit} />
    </>
  );
}

export default App;
