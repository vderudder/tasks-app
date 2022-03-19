import React, { useState } from "react";

import { AppUi } from "./AppUI";

import { v4 as uuid } from 'uuid';

import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // Array for searched todos
  let searchedTodos = [];

  // Check if search value is a word
  if (!searchValue.length >= 1) {
    // If there's nothing, show all todos
    searchedTodos = todos;
  }
  else {
    // Add searched todos to show
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Search todo and change completed prop to true
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);

  };

  // Search todo and delete it from array, updates new array
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  };

  // Create new todo and add it to the list
  const createTodo = (text) => {
    const newTodo = { id: uuid(), text: text, completed: false }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  return (

    <AppUi 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    newTodo={newTodo}
    setNewTodo={setNewTodo}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    createTodo={createTodo}
    />
  );
}

export default App;
