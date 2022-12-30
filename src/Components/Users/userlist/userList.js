import './userlist.css'
const UserList = props=>{
    return(
        <div className="userList"> 
          <p>
           {props.userName} {props.userAge}
            </p> 

        </div>
    )
}

export default UserList