import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import Modal from "./components/Modal";
import DashboardWidget from "./components/DashboardWidget";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Navbar />

            <main>
                <div className="hero">
                    <p className="subtitle">REACT.JS WORKSHOP</p>
                    <h1>Component Creation Workshop</h1>
                    <p className="description">
                        Reusable components built with React
                    </p>
                </div>

                <div className="component-grid">
                    <Card />
                    <DashboardWidget />
                    <Form />
                    <Modal />
                </div>
            </main>
        </div>
    );
}

export default App;