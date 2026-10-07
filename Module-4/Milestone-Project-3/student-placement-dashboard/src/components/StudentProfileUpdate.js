import { useState } from "react";

function StudentProfileUpdate({
  student,
  updateStudent,
  cancelUpdate,
}) {
  const [name, setName] = useState(student.name);
  const [course, setCourse] = useState(student.course);
  const [email, setEmail] = useState(student.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course || !email) {
      alert("Please fill all fields");
      return;
    }

    const updatedStudent = {
      id: student.id,
      name,
      course,
      email,
    };

    updateStudent(updatedStudent);

    alert("Student profile updated successfully!");
  };

  return (
    <section id="edit-profile">
      <h2>Update Student Profile</h2>

      <div className="edit-profile-card">
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

          <div className="edit-actions">
            <button type="submit">Update Profile</button>

            <button
              type="button"
              className="cancel-button"
              onClick={cancelUpdate}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default StudentProfileUpdate;