import React, { useState } from 'react';

function Form ({addUser}) {
    const [NewValue, setNewValue] = useState("");

    const onAddUser = (event) => {
        event.preventDefault();
        if (NewValue.trim() != "") {
            addUser(NewValue);
            setNewValue("");
        }
    }

    const onValueChange = (event) => setNewValue(event.target.value);

    return(
        <form onSubmit={onAddUser}>
            <input type="text" onChange={onValueChange} value={NewValue}/>
            <button type="submit">Add User</button>
        </form>
    );
}

export default Form;