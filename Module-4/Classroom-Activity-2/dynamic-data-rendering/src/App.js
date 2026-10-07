import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setStudents(data));
    }, []);

    return (
        <div>
            <h1>Dynamic Data Rendering Lab</h1>

            <h2>Student List</h2>

            {students.map((student) => (
                <div className="student" key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Email: {student.email}</p>
                    <p>City: {student.address.city}</p>
                </div>
            ))}
        </div>
    );
}

export default App;