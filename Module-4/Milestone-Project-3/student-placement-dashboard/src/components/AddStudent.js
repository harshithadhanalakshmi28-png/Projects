import { useState } from "react";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course || !email) {
      alert("Please fill all fields");
      return;
    }

    const student = {
      id: Date.now(),
      name,
      course,
      email,
    };

    addStudent(student);

    setName("");
    setCourse("");
    setEmail("");

    alert("Student added successfully!");
  };

  return (
    <section id="profile">
      <h2>Add Student</h2>

      <div className="add-student-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Add Student</button>
        </form>
      </div>
    </section>
  );
}

export default AddStudent;