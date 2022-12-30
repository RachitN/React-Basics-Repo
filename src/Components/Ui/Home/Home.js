import { useRef, useState } from 'react'
import Button from '../button/button'
import Card from '../Card/card'
import ErrorModal from '../ErrorModal/errormodal'
import classes from './Home.module.css'
const Home = props=> {    
    const userName = useRef();
    const userAge = useRef();
    const addUser = event=>{
        event.preventDefault()
        const enteredUserName = userName.current.value;
        const enteredUserAge = userAge.current.value;
        if(enteredUserName.trim().length==0 || enteredUserAge.trim().length==0)
        {
            setErrorDetail((prev)=>{
                return {
                    ...prev,
                    title:'Empty Details',
                    message : 'Please Enter Name or Age!',
                    showMessage:true
                }
            })
            return;
        }
        if(enteredUserAge<1){
            setErrorDetail((prev)=>{
                return {
                    ...prev,
                    title:'Inappropiate Age',
                    message : 'Age is Invalid!',
                    showMessage:true
                }
            })
            return;
        }
        let data = {
            name:enteredUserName,
            age:enteredUserAge
        }
        userName.current.value = "";
        userAge.current.value = ""
        props.onClick(data)
    }
    const [errorDetails,setErrorDetail] = useState({
        title:'',
        message:'',
        showMessage:false
    })
    const errorHandler = error=>{
        setErrorDetail((prev)=>{
            return {
                ...prev,
                showMessage:false
            }
        })
    }


    return(<div>
        {
            errorDetails.showMessage ? <ErrorModal title={errorDetails.title} message={errorDetails.message} errorHandler={errorHandler}/> :''
        }
        <Card className={classes.home}>
        <form onSubmit={addUser}>
            <label htmlFor="user"> User</label>
            <input name="user" ref={userName}  type="text"/>
            <br/>
            <label htmlFor="age">Age</label>  
            <input name="age" ref={userAge} type="text"/>  
            <br/>
            <Button className ={classes.btt} text={'Button'} type={'submit'}></Button>
        </form>
    </Card>
    </div>)
}

export default Home