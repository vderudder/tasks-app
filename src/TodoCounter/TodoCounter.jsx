import React from "react";
import './TodoCounter.css'

export function TodoCounter({total, completed}) {
    return (
        <React.Fragment>
            <h3 className="todo-counter-h3">You have completed {completed} of {total} tasks</h3>
        </React.Fragment>

    );
}