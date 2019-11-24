import React, { Component } from 'react';

class Form extends Component {
    state = {
        NewValue: ""
    }

    onAddUser = (event) => {
        event.preventDefault();
        const NewValue = this.state.NewValue;
        if (NewValue.trim() != "") {
            this.props.addUser(NewValue);
            this.setState({NewValue: ""});
        }
    }

    onValueChange = (event) => {
        this.setState({NewValue: event.target.value});
    }

    render () {
        return(
            <form onSubmit={this.onAddUser}>
                <input type="text" onChange={this.onValueChange} value={this.state.NewValue}/>
                <button type="submit">Add User</button>
            </form>
        );
    }
}

export default Form;