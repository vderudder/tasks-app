import React from "react";
import "./TodoCreate.css"

export function TodoCreate({newTodo, setNewTodo, onCreate}) {
    const onNewTodoChange = (e) => {
        const value = e.target.value;
        setNewTodo(value);
    }

    const onEnterKey = (e) => {
        if (e.charCode === 13) {
            onCreate();
            setNewTodo("");
        }
    }
    
    return (
        <div className="create-container">
            <input 
            className="create-input"
            placeholder="Add a new task..."
            value={newTodo}
            onFocus={() => setNewTodo("")}
            onChange={onNewTodoChange}
            onKeyPress={onEnterKey}
            />

            <button 
            className="create-button"
            onClick={onCreate}
            ><i className="fas fa-plus"></i></button>
        </div>

    );
}