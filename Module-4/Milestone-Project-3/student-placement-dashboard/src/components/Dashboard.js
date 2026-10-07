function Dashboard({ students }) {
  return (
    <section id="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span className="card-icon">👨‍🎓</span>
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">💼</span>
          <h3>Placement Opportunities</h3>
          <p>12</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">📄</span>
          <h3>Applications</h3>
          <p>8</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">🎯</span>
          <h3>Selected Students</h3>
          <p>3</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;