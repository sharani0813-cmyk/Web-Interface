function Dashboard() {
  return (
    <div>

      <section className="welcome">
        <div>
          <h2>Welcome back, Sharani 👋</h2>
          <p>Here is your academic performance overview.</p>
        </div>

        <div className="profile-circle">SP</div>
      </section>

      <div className="cards">

        <div className="card">
          <span>CGPA</span>
          <h2>8.72</h2>
          <p>Current Performance</p>
        </div>

        <div className="card">
          <span>Attendance</span>
          <h2>86%</h2>
          <p>Overall Attendance</p>
        </div>

        <div className="card">
          <span>Semester</span>
          <h2>III</h2>
          <p>Current Semester</p>
        </div>

        <div className="card">
          <span>Backlogs</span>
          <h2>0</h2>
          <p>Academic Status</p>
        </div>

      </div>

      <div className="info-box">
        <h2>Student Information</h2>

        <div className="info-grid">
          <p><b>Name:</b> Sharani P</p>
          <p><b>Register No:</b> 23CSE105</p>
          <p><b>Department:</b> CSE - Cyber Security</p>
          <p><b>Year:</b> II Year</p>
          <p><b>College:</b> Prince Dr. K. Vasudevan College</p>
          <p><b>Batch:</b> 2025 - 2029</p>
        </div>
      </div>

      <div className="info-box">
        <h2>Academic Status</h2>
        <p className="status">✓ Eligible for Placement</p>
      </div>

    </div>
  );
}

export default Dashboard;