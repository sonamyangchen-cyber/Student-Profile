import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <p className="subtitle">STUDENT MANAGEMENT</p>
        <h1>Student Profile Cards</h1>
        <p className="description">
          Meet our students and explore their academic profiles.
        </p>
      </header>

      <div className="student-grid">
        <StudentCard
          name="Sonam"
          enrollmentId="BCA001"
          course="BCA"
          semester="5th Semester"
          email="sonam@example.com"
        />

        <StudentCard
          name="Guna"
          enrollmentId="MCA002"
          course="MCA"
          semester="3rd Semester"
          email="guna@example.com"
        />

        <StudentCard
          name="Monisha"
          enrollmentId="BCA003"
          course="BCA"
          semester="2nd Semester"
          email="monisha@example.com"
        />

        <StudentCard
          name="Tharzom"
          enrollmentId="BCA004"
          course="BCA"
          semester="4th Semester"
          email="tharzom@example.com"
        />
      </div>
    </div>
  );
}

export default App;