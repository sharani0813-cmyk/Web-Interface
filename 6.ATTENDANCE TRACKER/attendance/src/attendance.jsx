
import { useState } from "react";
import "./attendance.css";

function Attendance() {
  const students = [
    { id: 1, name: "sharani" },
    { id: 2, name: "Sahana" },
    { id: 3, name: "Mathi" },
    { id: 4, name: "Shivani" },
    { id: 5, name: "Priya" }
  ];

  const [attendance, setAttendance] = useState({});

  const markAttendance = (id, status) => {
    setAttendance({
      ...attendance,
      [id]: status
    });
  };

  const resetAttendance = () => {
    setAttendance({});
  };

  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;

  return (
    <div className="attendance-container">
      <h1>Attendance Tracking  </h1>

      <div className="summary">
        <div>
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div>
          <h3>Present</h3>
          <p>{presentCount}</p>
        </div>

        <div>
          <h3>Absent</h3>
          <p>{absentCount}</p>
        </div>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <div className="student" key={student.id}>
            <span>{student.name}</span>

            <div>
              <button
                className="present-btn"
                onClick={() => markAttendance(student.id, "Present")}
              >
                Present
              </button>

              <button
                className="absent-btn"
                onClick={() => markAttendance(student.id, "Absent")}
              >
                Absent
              </button>

              {attendance[student.id] && (
                <span className="status">
                  {attendance[student.id]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={resetAttendance}>
        Reset
      </button>
    </div>
  );
}

export default Attendance;