function InterviewStatus() {
  return (
    <section id="interviews">
      <h2>Interview & Selection Status</h2>

      <div className="interview-grid">
        <div className="interview-card">
          <div className="status-icon">📅</div>

          <h3>Infosys</h3>

          <p>
            <strong>Role:</strong> Cyber Security Analyst
          </p>

          <p>
            <strong>Interview Date:</strong> 15 October 2026
          </p>

          <span className="interview-status scheduled">
            Interview Scheduled
          </span>
        </div>

        <div className="interview-card">
          <div className="status-icon">🎉</div>

          <h3>Wipro</h3>

          <p>
            <strong>Role:</strong> Full Stack Developer
          </p>

          <p>
            <strong>Status:</strong> Successfully Selected
          </p>

          <span className="interview-status selected">
            Selected
          </span>
        </div>
      </div>
    </section>
  );
}

export default InterviewStatus;