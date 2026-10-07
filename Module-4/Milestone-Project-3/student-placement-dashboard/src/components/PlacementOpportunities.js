function PlacementOpportunities({ applyForPlacement })  {
  const opportunities = [
    {
      id: 1,
      company: "TCS",
      role: "Software Developer",
      package: "₹6 LPA",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Cyber Security Analyst",
      package: "₹5 LPA",
    },
    {
      id: 3,
      company: "Wipro",
      role: "Full Stack Developer",
      package: "₹5.5 LPA",
    },
  ];

  return (
    <section id="placements">
      <h2>Placement Opportunities</h2>

      <div className="placement-grid">
        {opportunities.map((job) => (
          <div className="placement-card" key={job.id}>
            <div className="company-logo">
              {job.company.charAt(0)}
            </div>

            <h3>{job.company}</h3>

            <p>
              <strong>Role:</strong> {job.role}
            </p>

            <p>
              <strong>Package:</strong> {job.package}
            </p>

            <button onClick={() => applyForPlacement(job)}> Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlacementOpportunities;