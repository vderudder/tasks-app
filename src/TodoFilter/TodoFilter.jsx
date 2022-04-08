import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoFilter.css"

export function TodoFilter() {

    const {onFilterChange, filter } = useContext(TodoContext);


    const onChange = (newFilter) =>{
        onFilterChange(newFilter)

    }


    return (
        <React.Fragment>
            <ul className="tab-bar">
                <li>Filter</li>
                <li onClick={() => onChange("all")}><span className={`tab ${filter === 'all' && 'tab--active'}`}>All</span></li>
                <li onClick={() => onChange("done")}><span className={`tab ${filter === 'done' && 'tab--active'}`}>Done</span></li>
                <li onClick={() => onChange("todo")}><span className={`tab ${filter === 'todo' && 'tab--active'}`}>To do</span></li>
            </ul>
        </React.Fragment>
    );


}