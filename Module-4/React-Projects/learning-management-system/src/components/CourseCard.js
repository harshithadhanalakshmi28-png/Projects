function CourseCard({ course, onEnroll }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p>{course.description}</p>

      <button onClick={() => onEnroll(course.title)}>
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;