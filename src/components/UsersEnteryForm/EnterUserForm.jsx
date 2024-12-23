import './EnterUserForm.css';
import { useState, useEffect } from 'react';
import Error from '../Error/Error';

const standardData = {
    'user-name': "",
    'age': ""
};

function EnterUserForm(props) {
    const [userInput, setUserInput] = useState(standardData);
    const [error, setError] = useState();
    // Populate form if editing
    useEffect(() => {
        if (props.editUser) {
            setUserInput(props.editUser);
        }
    }, [props.editUser]);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = userInput['user-name'].trim();
        const enteredAge = userInput['age'].toString().trim();
        // Validation
        if (enteredName.length === 0 || enteredAge.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 12) {
            setError({
                title: 'Invalid age',
                message: 'You have to be older than 12.'
            });
            return;
        }
        // Handle Add or Update
        if (props.onUserSubmit) {
            props.onUserSubmit(userInput);
        }
        // Reset form after submission
        setUserInput(standardData);
        event.target.reset();
    };
    const userInputHandler = (inputId, value) => {
        setUserInput((prevInput) => {
            return { ...prevInput, [inputId]: value };
        });
    };
    const errorHandler = () => {
        setError(null);
    };
    return (
        <>
            {error && <Error title={error.title} message={error.message} onErrorClose={errorHandler} />}
            <form className="enter-user-form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="user-name">Enter Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        id="user-name"
                        value={userInput['user-name']}
                        onChange={(event) => userInputHandler('user-name', event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Enter Your Age</label>
                    <input
                        type="number"
                        placeholder="Enter your age"
                        id="age"
                        value={userInput['age']}
                        onChange={(event) => userInputHandler('age', event.target.value)}
                    />
                </div>
                <button type="submit">{props.editUser ? 'Update' : 'Submit'}</button>
            </form>
        </>
    );
}

export default EnterUserForm;
