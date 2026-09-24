function Academic() {

  const subjects = [
    ["Java Programming", 42, 45, 87, "A"],
    ["Database Management", 44, 43, 87, "A"],
    ["Data Structures", 40, 46, 86, "A"],
    ["Web Technology", 45, 48, 93, "A+"],
    ["Cyber Security", 43, 44, 87, "A"],
    ["Mathematics", 39, 42, 81, "A"]
  ];

  return (
    <div>

      <div className="page-title">
        <h2>Academic Record</h2>
        <p>Semester III - Subject Wise Performance</p>
      </div>

      <div className="table-box">

        <table>

          <thead>
            <tr>
              <th>Subject</th>
              <th>Internal</th>
              <th>External</th>
              <th>Total</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject[0]}</td>
                <td>{subject[1]}</td>
                <td>{subject[2]}</td>
                <td>{subject[3]}</td>
                <td>
                  <b>{subject[4]}</b>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <div className="result">
        <h3>Semester Result</h3>
        <p>CGPA: <b>8.72</b></p>
        <p>Result: <b>PASS</b></p>
      </div>

    </div>
  );
}

export default Academic;