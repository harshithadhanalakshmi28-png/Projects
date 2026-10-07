import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddTask from "./components/AddTask";
import TaskDashboard from "./components/TaskDashboard";
import EditTask from "./components/EditTask";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>

          <Route
            path="/"
            element={
              <TaskDashboard
                tasks={tasks}
                deleteTask={deleteTask}
              />
            }
          />

          <Route
            path="/addtask"
            element={
              <AddTask addTask={addTask} />
            }
          />

          <Route
            path="/edit/:id"
            element={
              <EditTask
                tasks={tasks}
                updateTask={updateTask}
              />
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;