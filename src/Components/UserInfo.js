import React, { useState } from 'react';

function UserInfo ({editUser, onDeleteUser, user}) {
    const [Edit, setEdit] = useState(false);
    const [NewValue, setNewValue] = useState(user.username);

    const onUserChange = (event) => setNewValue(event.target.value);

    const onToggleEdit = () => setEdit(!Edit);

    const onUserEdit = (event) => {
        event.preventDefault();
        if (NewValue.trim() != "") {
            editUser(NewValue, user.id);
            onToggleEdit();
        }
    }

    if (Edit)
        return(
            <form onSubmit={onUserEdit}>
                <input type="text" onChange={onUserChange} defaultValue={user.username} />
                <input type="submit" value="Update" />
            </form>
        );
    else
        return(
            <div>
                <span>{user.username}</span>
                <button onClick={onToggleEdit}>Edit</button>
                <button onClick={() => {onDeleteUser(user.id)}}>Delete</button>
            </div>
        );
}

export default UserInfo;