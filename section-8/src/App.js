import React ,{useState} from 'react';
import AddUser from './Users/AddUser';
import ListOfUsers from './Users/ListOfUsers';
import './App.css';

function App() {

  const [list_users, setlist_users] = useState([]);

  const AddTo_list_users =(uname,uage ) => {

    setlist_users( (prev) => {
      return [...prev,{n:uname ,a:uage,id:Math.random().toString()} ];
    })


  }

  return (
    <div>
      <AddUser onAdd={AddTo_list_users}/>
     <ListOfUsers users={list_users}/>
    </div>
  );
}

export default App;
