function StudentDashboard({ enrolledCourses }) {
  return (
    <section id="dashboard" className="dashboard">
      <h2>Student Dashboard</h2>

      <p><strong>Student:</strong> Harshitha</p>
      <p><strong>Enrolled Courses:</strong> {enrolledCourses.length}</p>

      {enrolledCourses.length > 0 ? (
        <ul>
          {enrolledCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </section>
  );
}

export default StudentDashboard;