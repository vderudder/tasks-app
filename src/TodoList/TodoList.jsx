import React from "react";
import "./TodoList.css"

export function TodoList(props) {
    return (
        <section className="todo-list-section">
            <ul className="todo-list">
                {props.children}
            </ul>

        </section>
    );
}