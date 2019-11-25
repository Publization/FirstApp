import React, { useState, useEffect } from 'react';
import './App.css';
import UserInfo from './Components/UserInfo.js';
import Form from './Components/Form.js';
import axios from 'axios';

function App () {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(Response => {
      setUsers(Response.data);
      setLoading(false);
    });
  }, []);

  const addUser = NewValue => setUsers([...Users, {id: Math.random() * 100, username: NewValue}]);

  const onDeleteUser = Id => {
    Users.map((User, Index) => {
      if (User.id == Id) {
        const newUsers = [...Users];
        newUsers.splice(Index, 1);
        setUsers(newUsers);
      }
    });
  }

  const editUser = (NewValue, Id) => {
    Users.map((User, Index) => {
      if (User.id == Id) {
        const newUsers = [...Users];
        newUsers[Index].username = NewValue;
        setUsers(newUsers);
      }
    });
  }

  return(
    <div className="App">
      <h3 style={{margin: "0px", color: "#444", padding: "14px", backgroundImage: "linear-gradient(90deg, #ececec, #fff)"}}>Users List</h3>
      <Form addUser={addUser} />
      <div className="Users">
      { Loading?
          "Loading..."
          :
          Users.length > 0?
            Users.map((user, index) => {
              return <UserInfo key={user.id} editUser={editUser} onDeleteUser={onDeleteUser} user={user} />
            })
            :
            "No User Yet"
      }
      </div>
    </div>
  );
}

export default App;
