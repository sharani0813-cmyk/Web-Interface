function Achievements() {

  const achievements = [
    ["🏆", "Smart India Hackathon", "Participated in SIH 2026"],
    ["📜", "Java Programming", "Completed Java Fundamentals"],
    ["💻", "Web Development", "Completed React Web Project"],
    ["🔐", "Cyber Security Workshop", "Participated in Cyber Security Workshop"],
    ["🎨", "UI/UX Course", "Completed User Experience Course"],
    ["⭐", "Academic Achievement", "Maintained good academic performance"]
  ];

  return (
    <div>

      <div className="page-title">
        <h2>Achievements</h2>
        <p>Certificates, projects and accomplishments</p>
      </div>

      <div className="achievement-grid">

        {achievements.map((item, index) => (

          <div className="achievement" key={index}>

            <div className="achievement-icon">
              {item[0]}
            </div>

            <div>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>

              <button>
                View Details
              </button>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Achievements;