import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoCreate } from "../TodoCreate/TodoCreate";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import { TodoEmptyState } from "../TodoEmptyState/TodoEmptyState";
import { TodoLoadingState } from "../TodoEmptyState/TodoLoadingState";

import image from "../assets/image.svg"

import "./App.css"
import { Footer } from "../Footer/Footer";

export function AppUi() {

    const {
        error,
        loading,
        completeTodo,
        deleteTodo,
        newTodo,
        setNewTodo,
        createTodo,
        filteredTodos } = useContext(TodoContext);




    return (
        <React.Fragment>
            <div className="app-container">

                <div className="left">
                    <img src={image} alt="Tasks home image" className="tasks-img" />
                    <h1 className="title-h1">Welcome!</h1>
                    <TodoCreate
                        newTodo={newTodo}
                        setNewTodo={setNewTodo}
                        onCreate={() => createTodo(newTodo)}
                    />

                </div>


                <div className="right">

                    <h1 className="title-h2">Your tasks</h1>
                    <TodoCounter />
                    <TodoFilter />

                    <TodoList>
                        {error && <p>Oops! Something went wrong</p>}
                        {loading && <TodoLoadingState />}
                        {(!loading && !filteredTodos.length) && <TodoEmptyState />}

                        {filteredTodos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
                </div>
            </div>
            <Footer />

        </React.Fragment>
    );
}