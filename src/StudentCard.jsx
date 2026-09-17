function StudentCard({ name, enrollmentId, course, semester, email }) {
  return (
    <div className="student-card">
      <div className="card-top">
        <div className="avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h2>{name}</h2>
          <p className="course">{course} Student</p>
        </div>
      </div>

      <div className="student-details">
        <div className="detail">
          <span>Enrollment ID</span>
          <strong>{enrollmentId}</strong>
        </div>

        <div className="detail">
          <span>Semester</span>
          <strong>{semester}</strong>
        </div>

        <div className="detail email-detail">
          <span>Email</span>
          <strong>{email}</strong>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;