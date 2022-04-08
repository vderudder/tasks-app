import React from "react";
import "./TodoItem.css"

export function TodoItem(props) {
    

    return (
        <li className="todo-item">
            <span 
            className={`todo-item-check ${props.completed && 'todo-item-check--checked'}`}
            onClick={props.onComplete}
            ><i className="fas fa-check"></i></span>
            <p 
            className={`todo-item-text ${props.completed && 'todo-item--completed'}`}
            >{props.text}</p>
            <span 
            className="todo-item-delete"
            onClick={props.onDelete}><i className="far fa-trash-alt"></i></span>
        </li>
    );
}