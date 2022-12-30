import { useState } from 'react'
import Button from '../button/button'
import Card from '../Card/card'
import ErrorModal from '../ErrorModal/errormodal'
import classes from './Home.module.css'
const Home = props=> {    
    const addUser = event=>{
        event.preventDefault()
        if(userDetails.userName.trim().length==0 || userDetails.userAge.trim().length==0)
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
        if(userDetails.userAge<1){
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
            name:userDetails.userName,
            age:userDetails.userAge
        }
        setUserArray((prev)=>{
            return {
                ...prev,
                userName:"",
                userAge:"",
            }
        });
        props.onClick(data)
    }
    const addUserName = event=>{
        event.preventDefault()
        setUserArray((prev)=>{
            return{
                ...prev,
                userName:event.target.value
            }
        })
    }
    const addUserAge = event=>{
        event.preventDefault()
        setUserArray((prev)=>{
            return{
                ...prev,
                userAge:event.target.value
            }
        })
    }

    const [userDetails, setUserArray] = useState({
        userName:'',
        userAge:'',
    });
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
            <input name="user" value={userDetails.userName} onChange={addUserName} type="text"/>
            <br/>
            <label htmlFor="age">Age</label>  
            <input name="age" value={userDetails.userAge} onChange={addUserAge} type="text"/>  
            <br/>
            <Button className ={classes.btt} text={'Button'} type={'submit'}></Button>
        </form>
    </Card>
    </div>)
}

export default Home