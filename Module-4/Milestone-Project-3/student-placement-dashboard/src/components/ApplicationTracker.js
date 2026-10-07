function ApplicationTracker({ applications }) {
  return (
    <section id="applications">
      <h2>Application Tracking</h2>

      {applications.length === 0 ? (
        <p className="empty-message">
          No applications yet. Apply for a placement opportunity above.
        </p>
      ) : (
        <div className="application-grid">
          {applications.map((application) => (
            <div className="application-card" key={application.id}>
              <h3>{application.company}</h3>

              <p>
                <strong>Role:</strong> {application.role}
              </p>

              <span className="application-status">
                {application.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ApplicationTracker;