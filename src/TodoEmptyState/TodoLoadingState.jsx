import React from "react";
import "./TodoLoadingState.css"


export function TodoLoadingState() {

    return (
        <div className="loading-state-container">
            <div class="loader"></div>
            <p>Loading...</p>
        </div>

    );
}