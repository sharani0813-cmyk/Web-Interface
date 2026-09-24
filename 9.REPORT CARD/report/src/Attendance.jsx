function Attendance() {

  const data = [
    ["Java Programming", 42, 48, "87.5%"],
    ["Database Management", 40, 45, "88.8%"],
    ["Data Structures", 39, 46, "84.7%"],
    ["Web Technology", 44, 48, "91.6%"],
    ["Cyber Security", 41, 46, "89.1%"],
    ["Mathematics", 38, 47, "80.8%"]
  ];

  return (
    <div>

      <div className="page-title">
        <h2>Attendance</h2>
        <p>Subject-wise attendance details</p>
      </div>

      <div className="attendance-card">

        <h3>Overall Attendance</h3>

        <div className="attendance-number">
          86%
        </div>

        <div className="progress">
          <div></div>
        </div>

        <p>Good attendance record</p>

      </div>

      <div className="table-box">

        <table>

          <thead>
            <tr>
              <th>Subject</th>
              <th>Present</th>
              <th>Total Classes</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>

            {data.map((item, index) => (
              <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td><b>{item[3]}</b></td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Attendance;