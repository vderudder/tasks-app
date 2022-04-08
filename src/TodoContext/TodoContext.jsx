import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuid } from 'uuid';


const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");


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

  // Changes filter
  const onFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  // Default showing all todos
  let filteredTodos = searchedTodos;

  // Checks which filter has and show only those todos
  switch (filter) {
    case "done":
      filteredTodos = todos.filter(todo => todo.completed);
      break;
    case "todo":
      filteredTodos = todos.filter(todo => !todo.completed)

    default:
      break;
  }


  // Search todo and change completed prop to true
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

  };

  // Search todo and delete it from array, updates new array
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  };

  // Create new todo and add it to the list
  const createTodo = (text) => {
    if (text !== '') {
      const newTodo = { id: uuid(), text: text, completed: false }
      const newTodos = [newTodo, ...todos];
      saveTodos(newTodos);
    }

  }


  return (
    <TodoContext.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      newTodo,
      setNewTodo,
      completeTodo,
      deleteTodo,
      createTodo,
      onFilterChange,
      filteredTodos,
      filter
    }}>
      {props.children}

    </TodoContext.Provider>

  );
}

export { TodoContext, TodoProvider }