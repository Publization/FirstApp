import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        if (Edit) document.getElementById(user.id).children[0].focus();
    }, [Edit]);

    if (Edit)
        return(
            <form onSubmit={onUserEdit} className="User" id={user.id}>
                <input type="text" onChange={onUserChange} defaultValue={user.username} />
                <button className="UserButton" type="submit">Save</button>
            </form>
        );
    else
        return(
            <div className="User">
                <span>{user.username}</span>
                <button className="UserButton" onClick={onToggleEdit}>Edit</button>
                <button className="UserButton NegativeBtn" onClick={() => {onDeleteUser(user.id)}}>Delete</button>
            </div>
        );
}

export default UserInfo;