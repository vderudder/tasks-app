import React from "react";
import "./TodoCreate.css"

export function TodoCreate({newTodo, setNewTodo, onCreate}) {
    const onNewTodoChange = (e) => {
        const value = e.target.value;
        setNewTodo(value);
    }
    
    return (
        <div className="container">
            <input 
            className="add-todo-input"
            placeholder="Add new task..."
            value={newTodo}
            onChange={onNewTodoChange}
            onFocus={(e) => e.target.value = ""}
            />

            <button 
            className="add-todo-button"
            onClick={onCreate}
            >+</button>
        </div>

    );
}