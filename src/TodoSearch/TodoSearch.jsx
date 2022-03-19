import React, { useState } from "react";
import "./TodoSearch.css"

export function TodoSearch({searchValue, setSerchValue}) {

    const onSearchInputValueChange = (e) => {
        const value = e.target.value;
        setSerchValue(value);
    }

    return( 
        <input 
        className="todo-search-input" 
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchInputValueChange}
        />
    );
}