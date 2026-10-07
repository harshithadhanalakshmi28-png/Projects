function ProjectTasks() {
    return (
        <section className="section" id="tasks">
            <h2>Project Tasks</h2>

            <div className="cards">
                <div className="card">
                    <h3>Design UI</h3>
                    <p>Status: Completed</p>
                </div>

                <div className="card">
                    <h3>Build Components</h3>
                    <p>Status: In Progress</p>
                </div>

                <div className="card">
                    <h3>Test Application</h3>
                    <p>Status: Pending</p>
                </div>
            </div>
        </section>
    );
}

export default ProjectTasks;