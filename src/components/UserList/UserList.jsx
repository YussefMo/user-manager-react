import './UserList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function UserList({ users, setUsers }) {
    const deleteHandler = (index) => {
        setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
    };
    return (
        <div className="user-list">
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <div>Name: {user["user-name"]}</div>
                        <div>Age: {user.age}</div>
                        <button onClick={() => deleteHandler(index)}>
                            <FontAwesomeIcon className="icon" icon={faTrash} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;