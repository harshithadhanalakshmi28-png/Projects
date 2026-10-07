import { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !employee.id ||
      !employee.name ||
      !employee.email ||
      !employee.phone ||
      !employee.department ||
      !employee.position
    ) {
      alert("Please fill all fields");
      return;
    }

    addEmployee(employee);

    setEmployee({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      position: "",
    });
  };

  return (
    <div className="section">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Employee ID"
          value={employee.id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={employee.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={employee.position}
          onChange={handleChange}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;