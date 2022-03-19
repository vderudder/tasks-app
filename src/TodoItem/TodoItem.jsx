import React from "react";
import "./TodoItem.css"

export function TodoItem(props) {
    

    return (
        <li className="todo-item">
            <span 
            className={`todo-item-check ${props.completed && 'todo-item-check--active'}`}
            onClick={props.onComplete}
            >C</span>
            <p 
            className={`${props.completed && 'todo-item--completed'}`}
            >{props.text}</p>
            <span 
            className="todo-item-delete"
            onClick={props.onDelete}>X</span>
        </li>
    );
}