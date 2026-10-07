import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return ( 
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AddTodo addTodo={addTodo} />}
        />

        <Route
          path="/todolist"
          element={
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;