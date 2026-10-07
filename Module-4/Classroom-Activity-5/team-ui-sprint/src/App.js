import Navbar from "./components/Navbar";
import TeamMembers from "./components/TeamMembers";
import ProjectTasks from "./components/ProjectTasks";
import TeamStats from "./components/TeamStats";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />

            <main id="home">
                <section className="hero">
                    <p>REACT.JS TEAM PROJECT</p>
                    <h1>Team UI Development Sprint</h1>
                    <p>
                        A collaborative React UI development project
                        using reusable components.
                    </p>
                </section>

                <TeamMembers />
                <ProjectTasks />
                <TeamStats />
            </main>
        </div>
    );
}

export default App;