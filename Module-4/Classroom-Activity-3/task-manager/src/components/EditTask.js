import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTask({ tasks, updateTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((item) => item.id === Number(id));

  const [name, setName] = useState(task ? task.name : "");
  const [status, setStatus] = useState(task ? task.status : "Pending");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      return;
    }

    updateTask({
      id: Number(id),
      name: name,
      status: status,
    });

    navigate("/");
  };

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h1>Task Manager App</h1>
      <h2>Edit Task</h2>

      <form onSubmit={handleSubmit}>
        <label>Task Name</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
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

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default EditTask;