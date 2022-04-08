import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css"

export function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    return (
        <input
            className="search-input"
            placeholder="Search..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}