import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>My React Portfolio</h1>
              <About />
              <Skills />
              <Project />
              <Contact />
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;