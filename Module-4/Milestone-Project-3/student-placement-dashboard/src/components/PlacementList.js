function PlacementList({ students, deleteStudent, editStudent }) {
  return (
    <section id="students">
      <h2>Student Placement List</h2>

      {students.length === 0 ? (
        <p className="empty-message">No students added yet.</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="student-avatar">
                {student.name.charAt(0).toUpperCase()}
              </div>

              <h3>{student.name}</h3>

              <p>
                <strong>Course:</strong> {student.course}
              </p>

              <p>
                <strong>Email:</strong> {student.email}
              </p>

              <div className="student-actions">
                <button onClick={() => editStudent(student.id)}>
                  Edit Profile
                </button>

                <button
                  className="delete-button"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PlacementList;