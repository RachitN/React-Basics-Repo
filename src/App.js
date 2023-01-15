import { useState } from 'react';
import './App.css';
import Home from './Components/Ui/Home/Home';
import UserList from './Components/Users/userlist/userList';

function App() {
  const [userArray, setUserArray] = useState([]);
  const getData = data=>{
    data.key = userArray.length
    setUserArray((prev)=>{
      return [...prev,data]

    })
  }

  const checkUserDetails = data=>{
    var check = userArray.find((value)=>{
        if(value.name==data)
        {
          return true;
        }
    })
    return check
  }
  return (
    <div className="App">
      <Home onClick={getData} checkUserDetails = {checkUserDetails}></Home>
      {
                userArray.map((value)=>{
                    return <UserList key ={value.key} userName={value.name} userAge={value.age}/>
                })
            }
    </div>
  );
}

export default App;
