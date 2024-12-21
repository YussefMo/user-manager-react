import './Error.css'

function Error(props) {
    return(
        <>
            <div className='back-error' onClick={props.onErrorClose}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className="error-message">
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button onClick={props.onErrorClose}>Go Back</button>
                </footer>
            </div>
        </>
    )
}

export default Error;