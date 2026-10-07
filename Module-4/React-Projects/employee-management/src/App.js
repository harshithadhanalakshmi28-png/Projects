import { useState } from "react";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import EmployeeProfileUpdate from "./components/EmployeeProfileUpdate";
import EmployeeSearch from "./components/EmployeeSearch";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const editEmployee = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    setEditingEmployee(employee);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );

    setEditingEmployee(null);
  };

  const cancelUpdate = () => {
    setEditingEmployee(null);
  };

  return (
   <div className="app-container">
      <h1>Employee Management</h1>

      <EmployeeSearch employees={employees} />

      <hr />

      <AddEmployee addEmployee={addEmployee} />

      <hr />

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />

      {editingEmployee && (
        <>
          <hr />

          <EmployeeProfileUpdate
            employee={editingEmployee}
            updateEmployee={updateEmployee}
            cancelUpdate={cancelUpdate}
          />
        </>
      )}
    </div>
  );
}

export default App;