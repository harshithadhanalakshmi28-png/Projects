import CourseCard from "./CourseCard";

function CourseList({ courses, onEnroll }) {
  return (
    <section id="courses">
      <h2>Available Courses</h2>

      <div className="course-list">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={onEnroll}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseList;