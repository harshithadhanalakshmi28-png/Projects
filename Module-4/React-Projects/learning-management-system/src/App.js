import { useState } from "react";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import StudentDashboard from "./components/StudentDashboard";
import "./App.css";

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    {
      id: 1,
      title: "React.js",
      instructor: "John",
      duration: "6 Weeks",
      description: "Learn React components, props, state and hooks."
    },
    {
      id: 2,
      title: "JavaScript",
      instructor: "David",
      duration: "5 Weeks",
      description: "Learn JavaScript fundamentals and modern ES6 features."
    },
    {
      id: 3,
      title: "Web Development",
      instructor: "Sarah",
      duration: "8 Weeks",
      description: "Learn HTML, CSS and JavaScript for web development."
    }
  ];

  const enrollCourse = (courseName) => {
    if (!enrolledCourses.includes(courseName)) {
      setEnrolledCourses([...enrolledCourses, courseName]);
      alert(courseName + " enrolled successfully!");
    } else {
      alert("You are already enrolled in " + courseName);
    }
  };

  return (
    <div>
      <Navbar />

      <main className="container">
        <CourseList
          courses={courses}
          onEnroll={enrollCourse}
        />

        <StudentDashboard
          enrolledCourses={enrolledCourses}
        />
      </main>
    </div>
  );
}

export default App;