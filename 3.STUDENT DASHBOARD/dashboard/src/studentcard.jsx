import photo from "./assets/photo.jpg";
import "./studentcard.css";

function StudentCard(props) {
  return (
    <div className="student-card">

      <img src={photo} alt="Student" />

      <h2 style={{ color: "darkblue" }}>
        Name: {props.name}
      </h2>

      <p>Reg No: {props.regno}</p>
      <p>Department: {props.dept}</p>
      <p>Year & Sem: {props.yearsem}</p>

      <p style={{ color: "green" }}>
        CGPA: {props.cgpa}
      </p>

      <p style={{ color: "green" }}>
        Attendance: {props.attendance}%
      </p>

    </div>
  );
}

export default StudentCard;