import React, { Component } from 'react';
import './App.css';
import UserInfo from './Components/UserInfo.js';
import Form from './Components/Form.js';

class App extends Component {
  state = {
    NewUser: "",
    Users: [
      {id: 1, username: "Mohammed"},
      {id: 2, username: "Eslam"},
      {id: 3, username: "Tahboub"}
    ]
  }

  addUser = (NewValue) => {
    const Users = this.state.Users;
    Users.push({id: Math.random() * 100, username: NewValue});
    this.setState({Users});
  }

  onDeleteUser = (Id) => {
    this.state.Users.map((User, Index) => {
      if (User.id == Id) {
        const Users = this.state.Users;
        Users.splice(Index, 1);
        this.setState({Users});
      }
    });
  }

  editUser = (NewValue, Id) => {
    this.state.Users.map((User, Index) => {
      if (User.id == Id) {
        const Users = this.state.Users;
        Users[Index].username = NewValue;
        this.setState({Users});
      }
    });
  }

  render () {
      var Users;
    if (this.state.Users.length > 0) {
      Users = this.state.Users.map((user, index) => {
        return <UserInfo key={user.id} editUser={this.editUser} onDeleteUser={this.onDeleteUser} user={user} />
      });
    } else {
      Users = "No User Yet";
    }
    return(
      <div className="App">
        <h3>Users List</h3>
        <Form addUser={this.addUser} />
        {Users}
      </div>
    );
  }
}

export default App;
