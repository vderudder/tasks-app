import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css'

export function TodoCounter() {

    const { totalTodos, completedTodos } = useContext(TodoContext);

    return (
        <React.Fragment>
            <h3 className="title-h3">You have completed {completedTodos} of {totalTodos} tasks</h3>
        </React.Fragment>

    );
}