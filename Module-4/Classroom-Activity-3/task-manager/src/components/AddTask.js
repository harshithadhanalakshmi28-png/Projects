import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ addTask }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pending");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: name,
      status: status,
    };

    addTask(newTask);

    navigate("/");
  };

  return (
    <div>
      <h1>Task Manager App</h1>
      <h2>Task Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Task Name</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter task name"
        />

        <br />
        <br />

        <label>Task Status</label>
        <br />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <br />
        <br />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;