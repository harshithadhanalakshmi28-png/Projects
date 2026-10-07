import { useNavigate } from "react-router-dom";

function TaskDashboard({ tasks, deleteTask }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Task Manager App</h1>
      <h2>Task Dashboard</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.status}</td>

              <td>
                <button onClick={() => navigate(`/edit/${task.id}`)}>
                  Edit
                </button>

                <button onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={() => navigate("/addtask")}>
        Add Task
      </button>
    </div>
  );
}

export default TaskDashboard;