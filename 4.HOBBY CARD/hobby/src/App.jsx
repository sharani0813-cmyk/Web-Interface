/*import "./propscard.css";
import "./idcard.css";
import "./greetingcard.css";
import ProfileCard from "./propscardT4";
import GreetingCard from "./greetingcard5";
import IdCard from "./idcard6";
import Task6 from "./task6";
import Task7 from "./task7";
import Expression from "./Expression";
import Dashboard from "./Dashboard";
import Movie from "./Movie";
import Project1 from "./header";

import sharaniPhoto from "./assets/photo.jpg";
import priyaPhoto from "./assets/priya.jpg";
import sahanaPhoto from "./assets/sahana.jpg";

let name = "Sharani";
let age = 18;

function App() {
  return (
    <div>
      <h1>Task 1</h1>
      <h1>Hello World</h1>
      <h1>Welcome to React Class</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      <hr />

      <h1>Task 2</h1>
      <div className="cards">
        <ProfileCard
          photo={sharaniPhoto}
          name="Sharani P"
          department="Cyber Security"
          description="Hello! I am Sharani, a Cyber Security student."
        />

        <ProfileCard
          photo={priyaPhoto}
          name="Priya"
          department="Computer Science"
          description="Hello! I am Priya, a CSE student."
        />

        <ProfileCard
          photo={sahanaPhoto}
          name="Sahana"
          department="Information Technology"
          description="Hello! I am Sahana, an IT student."
        />
      </div>

      <hr />

      <h1>Task-3</h1>
      <ProfileCard
        photo={sharaniPhoto}
        name="Sharani P"
        department="Cyber Security"
        description="Hello! I am Sharani, a Cyber Security student."
      />

      <hr />

      <h1>Task 4</h1>
      <h1>Student ID Card</h1>

      <div className="cards">
        <IdCard
          photo={sharaniPhoto}
          name="SHARANI P"
          department="B.E - CSE"
          specialization="Cyber Security"
          regno="2526AUG0137"
          batch="2025-2029"
        />
      </div>

      <hr />

      <h1>Task 5</h1>
      <h1>Greeting Card</h1>

      <div className="cards">
        <GreetingCard
          title="Birthday Invitation"
          name="Sharani"
          date="13 June 2027"
          time="6:00 PM"
          venue="My Home"
          message="Join us for a wonderful evening filled with fun, laughter, and celebration!"
        />
      </div>

      <h1>Task 6</h1>
      <Task6 />

      <hr />

      <h1>Task 7</h1>
      <Task7 />

      <hr />

      <h1>Expression</h1>
      <Expression />

      <hr />

      <h1>Task 8</h1>
      <Dashboard />

      <hr />

      <h1>Movie Booking Application</h1>

      <Movie
        name="Leo"
        age={18}
        theatreName="PVR"
        price={200}
      />

      <Movie
        name="Anaconda"
        age={15}
        theatreName="Inox"
        price={250}
      />
    </div>
  );
}

export default App;


import Header from "./Header";
import StudentCard from "./StudentCard";
import Subject from "./SubjectList";
import Footer from "./Footer";
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
*/

import HobbyCard from "./HobbyCard";

import cooking from "./assets/cooking.jpg";
import dancing from "./assets/dancing.jpg";
import playing from "./assets/playing.jpg";
import singing from "./assets/singing.jpg";
import reading from "./assets/reading.jpg";

function App() {
  return (
    <div>
      <h1>Student Hobbies</h1>

      <HobbyCard
        hobbyname="Cooking"
        des="I love cooking delicious food."
        image={cooking}
      />

      <HobbyCard
        hobbyname="Dancing"
        des="I love dancing in my free time."
        image={dancing}
      />

      <HobbyCard
        hobbyname="Playing"
        des="I enjoy playing games with my friends."
        image={playing}
      />

      <HobbyCard
        hobbyname="Singing"
        des="I enjoy singing my favorite songs."
        image={singing}
      />

      <HobbyCard
        hobbyname="Reading"
        des="I like reading interesting books."
        image={reading}
      />
    </div>
  );
}

export default App;

