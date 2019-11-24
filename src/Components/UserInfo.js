import React, { Component } from 'react';

class UserInfo extends Component {
    state = {
        Edit: false,
        NewValue: this.props.user.username
    }

    onUserChange = (event) => {
        this.setState({NewValue: event.target.value});
    }

    onToggleEdit = () => {
        this.setState({Edit: !this.state.Edit});
    }

    onUserEdit = (event) => {
        event.preventDefault();
        const NewValue = this.state.NewValue;
        if (NewValue.trim() != "") {
            this.props.editUser(NewValue, this.props.user.id);
            this.onToggleEdit();
        }
    }

    render () {
        if (this.state.Edit)
            return(
                <form onSubmit={this.onUserEdit}>
                    <input type="text" onChange={this.onUserChange} defaultValue={this.props.user.username} />
                    <input type="submit" value="Update" />
                </form>
            );
        else
            return(
                <div>
                    <span>{this.props.user.username}</span>
                    <button onClick={this.onToggleEdit}>Edit</button>
                    <button onClick={() => {this.props.onDeleteUser(this.props.user.id)}}>Delete</button>
                </div>
            );
    }
}

export default UserInfo;