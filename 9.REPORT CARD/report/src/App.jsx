import { useState } from "react";
import Dashboard from "./Dashboard";
import Academic from "./Academic";
import Attendance from "./Attendance";
import Achievements from "./Achievements";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">

      <aside>
        <h2>🎓 RECORD CARD</h2>

        <div className="student">
          <div className="avatar">SP</div>
          <h3>Sharani P</h3>
          <p>B.E CSE - Cyber Security</p>
        </div>

        <nav>
          <button onClick={() => setPage("dashboard")}>
            🏠 Dashboard
          </button>

          <button onClick={() => setPage("academic")}>
            📚 Academic
          </button>

          <button onClick={() => setPage("attendance")}>
            📅 Attendance
          </button>

          <button onClick={() => setPage("achievements")}>
            🏆 Achievements
          </button>
        </nav>
      </aside>

      <main>
        <header>
          <div>
            <h1>Student Record Card</h1>
            <p>Academic Year 2025 - 2029</p>
          </div>

          <div className="notification">🔔</div>
        </header>

        {page === "dashboard" && <Dashboard />}
        {page === "academic" && <Academic />}
        {page === "attendance" && <Attendance />}
        {page === "achievements" && <Achievements />}
      </main>

    </div>
  );
}

export default App;