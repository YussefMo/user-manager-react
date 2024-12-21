import './EnterUserForm.css'
import { useState } from 'react'
import Error from '../Error/Error'

const standardData = {
    'user-name' : "",
    'age': 0 
}
function EnterUserForm(props){
    // create state for user input with standard data
    const [userInput , setUserInput] = useState(standardData)
    // create error state
    const [error , setError] = useState()
    // create form submit handler to handle form submission and update userInput state
    const submitHandler = (event)=> {
        event.preventDefault()
        // Retrieve the current values from userInput
        const enteredName = userInput['user-name'].trim();
        const enteredAge = userInput['age'].toString().trim();
        // form validation
        if(enteredName.length === 0 || enteredAge.length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values) .'
            })
            return
        }
        if(+enteredAge < 12){
            setError({
                title: 'Invalid age',
                message: 'You Have To Be Older Than 12.'
            })
            return
        }
        // clear inputs form
        event.target.reset()
        // pass the user input
        props.onUserSubmit(userInput)
        setUserInput(standardData); // Reset to default data
    }
    // create input change handler to update userInput state with entered values
    const userInputHandler = (inputId , value)=> {
        setUserInput((prevInput)=>{
            return {...prevInput, [inputId]: value}
        })
    }
    // error handler
    const errorHandler = ()=>{
        setError(null)
    }
    return(
        <>
            {error && <Error title={error.title} message={error.message} onErrorClose={errorHandler} />}
            <form className="enter-user-form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="user-name">Enter You're Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        id='user-name' 
                        onChange={(event)=>userInputHandler('user-name' , event.target.value)} />
                </div>
                <div>
                    <label htmlFor="age">Enter You're Age In Year</label>
                    <input 
                        type="number" 
                        placeholder="Enter your age" id='age' 
                        onChange={(event)=>userInputHandler('age' , event.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default EnterUserForm;