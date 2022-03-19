import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoCreate } from "../TodoCreate/TodoCreate";

export function AppUi(
    {totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    newTodo,
    setNewTodo,
    completeTodo,
    deleteTodo,
    createTodo}
) {
    return (
        <div className="wrapper">

            <div className="left">
                <h1 className="title-h1">Welcome!</h1>
                <TodoCreate
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    onCreate={() => createTodo(newTodo)}
                />
            </div>

            <div className="right">
                <h1>Your tasks</h1>
                <TodoCounter
                    total={totalTodos}
                    completed={completedTodos}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSerchValue={setSearchValue}
                />
                <TodoList>
                    {searchedTodos.map(todo => (
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
    );
}