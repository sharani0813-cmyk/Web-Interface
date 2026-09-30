
import Header from "./header";
import StudentCard from "./studentCard";
import Subject from "./subjectList";
import Footer from "./footer";
import "./App.css";

import photo from "./assets/photo.jpg";

function App() {
  return (
    <div>
      <Header />

      <StudentCard
        name="Sharani"
        regno="24CSE001"
        dept="CSE - Cyber Security"
        yearsem="2nd Year - 3rd Sem"
        cgpa="8.5"
        attendance="85"
        photo={photo}
      />

      <div className="details">
        <p>Current Semester: 3rd Semester</p>
        <p>Current Year: 2nd Year</p>
        <p>Total Subjects: 5</p>
        <p>Attendance Status: 85%</p>
        <p>Placement Status: Eligible</p>
      </div>

      <Subject />

      <Footer />
    </div>
  );
}

export default App;
