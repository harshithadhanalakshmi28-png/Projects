import { useState } from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import PlacementList from "./components/PlacementList";
import StudentProfileUpdate from "./components/StudentProfileUpdate";
import PlacementSearch from "./components/PlacementSearch";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PlacementOpportunities from "./components/PlacementOpportunities";
import ApplicationTracker from "./components/ApplicationTracker";
import InterviewStatus from "./components/InterviewStatus";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [applications, setApplications] = useState([]);
  const applyForPlacement = (job) => {
  const newApplication = {
    id: Date.now(),
    company: job.company,
    role: job.role,
    status: "Applied",
  };

  setApplications([...applications, newApplication]);

  alert(`Applied to ${job.company} successfully!`);
};

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = (id) => {
    const student = students.find((student) => student.id === id);
    setEditingStudent(student);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );

    setEditingStudent(null);
  };

  const cancelUpdate = () => {
    setEditingStudent(null);
  };

  return (
    <div className="app-container">
      <Navbar />

      <div className="dashboard-header">
  <p className="dashboard-label">COLLEGE PLACEMENT PORTAL</p>
  <h1>Student Placement Dashboard</h1>
  <p className="dashboard-subtitle">
    Manage students, placement opportunities, applications and interviews
  </p>
</div>



      <Dashboard students={students} />

      <hr />

      <PlacementSearch students={students} />

      <hr />

      <AddStudent addStudent={addStudent} />

      <hr />

      <PlacementList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />

      {editingStudent && (
        <>
          <hr />

          <StudentProfileUpdate
            student={editingStudent}
            updateStudent={updateStudent}
            cancelUpdate={cancelUpdate}
          />
        </>
      )}

      <hr />

     <PlacementOpportunities applyForPlacement={applyForPlacement} />

      <hr />

      <ApplicationTracker applications={applications} />

      <hr />

      <InterviewStatus />
    </div>
  );
}

export default App;
