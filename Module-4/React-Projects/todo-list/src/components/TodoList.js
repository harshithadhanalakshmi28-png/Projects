import { useNavigate } from "react-router-dom";

function TodoList({ todos, deleteTodo }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>To-Do List App</h1>

      <h2>Todo List</h2>

      {todos.length === 0 ? (
        <p>No todos added yet.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => navigate("/")}>
        Back to Add Todo
      </button>
    </div>
  );
}

export default TodoList;