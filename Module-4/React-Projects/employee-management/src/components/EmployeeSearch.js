import { useState } from "react";

function EmployeeSearch({ employees }) {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.id.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="section">
        <h2>Employee Search</h2>

      <input
        type="text"
        placeholder="Search by name, ID or department"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <div>
          {filteredEmployees.length === 0 ? (
            <p>No employee found.</p>
          ) : (
            filteredEmployees.map((employee) => (
              <div key={employee.id}>
                <h3>{employee.name}</h3>
                <p>Employee ID: {employee.id}</p>
                <p>Department: {employee.department}</p>
                <p>Position: {employee.position}</p>
                <hr />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeeSearch;