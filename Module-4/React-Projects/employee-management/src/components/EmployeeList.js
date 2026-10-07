function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  return (
    <div className="section">
           <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>

            <p>Employee ID: {employee.id}</p>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
            <p>Department: {employee.department}</p>
            <p>Position: {employee.position}</p>

            <button onClick={() => editEmployee(employee.id)}>
              Edit
            </button>

            <button onClick={() => deleteEmployee(employee.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default EmployeeList;