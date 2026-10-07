import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo.trim() === "") {
      return;
    }

    addTodo(todo);
    setTodo("");
    
  };

  return (
    <div>
      <h1>To-Do List App</h1>

      <h2>Add Todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />

        <button type="submit">Add Todo</button>
      </form> 
      <button onClick={() => navigate("/todolist")}>
            View Todo List
      </button>
    </div>
  );
}

export default AddTodo;