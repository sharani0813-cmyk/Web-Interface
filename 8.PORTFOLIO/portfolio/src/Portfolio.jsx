import "./Portfolio.css";
function Portfolio() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SP<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HOME */}
      <section id="home" className="hero">

        <div className="hero-text">

          <p className="tag">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Sharani P</span>
          </h1>

          <h2>Cyber Security Student</h2>

          <p className="hero-description">
            B.E. Computer Science and Engineering student specializing
            in Cyber Security, Web Development and Data Analysis.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>


        <div className="profile-card">

          <div className="profile-circle">
            SP
          </div>

          <h3>Sharani P</h3>

          <p>Cyber Security Student</p>

          <div className="profile-line"></div>

          <small>
            Passionate about technology,
            security and innovation.
          </small>

        </div>

      </section>


      {/* STATS */}
      <section className="stats">

        <div>
          <h2>2+</h2>
          <p>Years Learning</p>
        </div>

        <div>
          <h2>8+</h2>
          <p>Technical Skills</p>
        </div>

        <div>
          <h2>3+</h2>
          <p>Major Projects</p>
        </div>

        <div>
          <h2>2029</h2>
          <p>Graduation</p>
        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Building Skills Through Technology</h2>
        </div>

        <div className="about-container">

          <div className="about-box">

            <h3>Who I Am</h3>

            <p>
              I am a 2nd year B.E. Computer Science and Engineering
              student specializing in Cyber Security.
            </p>

            <p>
              I enjoy learning programming, web development,
              data analysis and cyber security. I believe in
              learning by building practical projects.
            </p>

            <p>
              My goal is to continuously improve my technical
              knowledge and gain real-world experience in the
              IT and Cyber Security field.
            </p>

          </div>


          <div className="education-box">

            <h3>Education</h3>

            <div className="timeline">

              <div className="timeline-item">
                <span>2025 - 2029</span>

                <h4>B.E. Computer Science & Engineering</h4>

                <p>
                  Specialization: Cyber Security
                </p>

                <small>
                  Prince Dr. K. Vasudevan College of
                  Engineering & Technology
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <div className="section-heading">
          <p>MY EXPERTISE</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-container">

          <div className="skill-card">
            <div className="skill-icon">PY</div>
            <h3>Python</h3>
            <p>Programming & Data Analysis</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">JA</div>
            <h3>Java</h3>
            <p>Object Oriented Programming</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">C+</div>
            <h3>C++</h3>
            <p>Programming & DSA</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Interactive Web Applications</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">RE</div>
            <h3>React.js</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">WD</div>
            <h3>HTML & CSS</h3>
            <p>Responsive Web Design</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">DB</div>
            <h3>SQL</h3>
            <p>Database Management</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">CS</div>
            <h3>Cyber Security</h3>
            <p>Security Fundamentals</p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="project-container">

          <div className="project-card">

            <div className="project-number">01</div>

            <h3>THE VOID</h3>

            <p>
              AI-powered multilingual learning assistant designed
              to support teachers and students with multilingual
              educational content.
            </p>

            <div className="project-tags">
              <span>AI</span>
              <span>React</span>
              <span>FastAPI</span>
            </div>

            <button>View Project →</button>

          </div>


          <div className="project-card">

            <div className="project-number">02</div>

            <h3>Online Shopping Sales Analysis</h3>

            <p>
              Python-based data analysis project that explores
              sales patterns, categories, prices and monthly
              shopping trends.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Data Analysis</span>
            </div>

            <button>View Project →</button>

          </div>


          <div className="project-card">

            <div className="project-number">03</div>

            <h3>Lab Equipment Register</h3>

            <p>
              Digital laboratory management system for maintaining
              equipment details, records, search and remarks.
            </p>

            <div className="project-tags">
              <span>Flask</span>
              <span>SQLite</span>
              <span>Web App</span>
            </div>

            <button>View Project →</button>

          </div>

        </div>

      </section>


      {/* INTERESTS */}
      <section className="interest-section">

        <div>
          <p>WHAT I LIKE TO WORK ON</p>
          <h2>Turning Ideas Into Digital Solutions</h2>
        </div>

        <div className="interest-list">

          <span>Web Development</span>
          <span>Cyber Security</span>
          <span>Data Analysis</span>
          <span>Artificial Intelligence</span>
          <span>Problem Solving</span>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Have a project or opportunity?</h3>

            <p>
              I am always interested in learning new technologies,
              working on projects and exploring internship
              opportunities.
            </p>

            <div className="contact-item">
              <strong>Email</strong>
              <span>sharani0813@gmail.com</span>
            </div>

            <div className="contact-item">
              <strong>GitHub</strong>
              <span>github.com/sharani0813-cmyk</span>
            </div>

            <div className="contact-item">
              <strong>LinkedIn</strong>
              <span>linkedin.com/in/sharani13</span>
            </div>

          </div>


          <div className="contact-form">

            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button>Send Message →</button>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          SP<span>.</span>
        </div>

        <p>
          Designed & Built by Sharani P
        </p>

        <p>
          © 2026 Sharani P. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Portfolio;