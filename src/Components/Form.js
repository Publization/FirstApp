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
            <input type="text" onChange={onValueChange} value={NewValue} placeholder="Type a Username..." />
            <button type="submit" style={{fontSize: "13px", borderRadius: "50%", color: "#333", width: "27px", height: "27px", backgroundColor: "#ddd", border: "1px solid #fff", boxShadow: "3px 5px 9px #bbb", marginRight: "8px"}}>+</button>
        </form>
    );
}

export default Form;