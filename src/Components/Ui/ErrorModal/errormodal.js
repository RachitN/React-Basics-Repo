import ReactDOM from 'react-dom'
import Button from "../button/button"
import Card from "../Card/card"
import './errorModal.css'

const Backdrop = props =>{
    return <div className="backdrop" onClick={props.errorHandler}></div>
}

const Modal = props =>{
    return             <Card className="modal">
    <header className="header">
       <h2>{props.title}</h2> 
    </header>
   <div><p className="content">
        {props.message}
    </p>
    </div> 
    <footer className="actions">
        <Button text={'Okay'} onClick={props.errorHandler}/>
    </footer>
</Card>
}

const ErrorModal = props =>{

    const errorHandler = error=>{
        props.errorHandler()
    }
    return(
        <>
            {ReactDOM.createPortal(<Backdrop errorHandler = {errorHandler}/>, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<Modal errorHandler = {errorHandler} title={props.title} message={props.message}/>, document.getElementById("backdrop"))}
        </>
    )
}

export default ErrorModal