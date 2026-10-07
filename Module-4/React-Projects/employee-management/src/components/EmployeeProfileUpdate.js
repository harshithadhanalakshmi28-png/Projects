import { useState } from "react";

function EmployeeProfileUpdate({ employee, updateEmployee, cancelUpdate }) {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleChange = (e) => {
    setUpdatedEmployee({
      ...updatedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateEmployee(updatedEmployee);
  };

  return (
    <div className="section">
         <h2>Employee Profile Update</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={updatedEmployee.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={updatedEmployee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={updatedEmployee.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={updatedEmployee.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={updatedEmployee.position}
          onChange={handleChange}
        />

        <button type="submit">Update Employee</button>

        <button type="button" onClick={cancelUpdate}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EmployeeProfileUpdate;