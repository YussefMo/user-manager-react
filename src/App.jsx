import './App.css'
import EnterUserForm from './components/UsersEnteryForm/EnterUserForm'
import UserList from './components/UserList/UserList';
import { useState } from'react';

function App() {
  const [users, setUsers] = useState([]); // State to store submitted user data

  const handleUserSubmit = (userData) => {
      // Update the state with the new user data
      setUsers((prevUsers) => [...prevUsers, userData]);
  };

  return (
    <>
      <EnterUserForm onUserSubmit={handleUserSubmit} />
      <UserList users={users} setUsers={setUsers}/>
    </>
  )
}

export default App
