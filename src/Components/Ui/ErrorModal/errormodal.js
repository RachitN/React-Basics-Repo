import Button from "../button/button"
import Card from "../Card/card"
import './errorModal.css'

const ErrorModal = props =>{

    const errorHandler = error=>{
        props.errorHandler()
    }
    return(
        <div>
            <div className="backdrop" onClick={errorHandler}></div>
            <Card className="modal">
                <header className="header">
                   <h2>{props.title}</h2> 
                </header>
               <div><p className="content">
                    {props.message}
                </p>
                </div> 
                <footer className="actions">
                    <Button text={'Okay'} onClick={errorHandler}/>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal