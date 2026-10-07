import { useState } from "react";

function PlacementSearch({ students }) {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="search">
      <h2>Search Students</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {search && (
        <div className="search-results">
          {filteredStudents.length === 0 ? (
            <p className="empty-message">No student found.</p>
          ) : (
            filteredStudents.map((student) => (
              <div className="search-result" key={student.id}>
                <strong>{student.name}</strong>
                <span>{student.course}</span>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default PlacementSearch;