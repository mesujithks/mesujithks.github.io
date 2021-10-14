import React from "react";

const About = () => {
  const [activetabIndex, setActivetabIndex] = React.useState(0);

  const viewTab = (currentIndex) => {
    setActivetabIndex(currentIndex);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section about" id="about">
      <div className="about-img">
        <img src="./assets/images/sujith-k-s.jpg" alt="Sujith K S" />
      </div>

      <div className="about-content">
        <div className="about-brief">
          <h1>About Me</h1>
          <p>
            I am a Fullstack Developer with demonstrated skills building high
            quality websites and mobile applications. I specialize in Spring
            Boot Micro Services and Angular / React and have professional
            experience working with Java and JavaScript. I also have experience
            working with Android Studio, & Flutter.
          </p>
          <br />
          <h3>PERSONAL SUMMARY</h3>
          <br />
          <p>
            <ul>
              <li>
                Industry experience building websites and web applications.
              </li>
              <li>
                Specialize in Java and have professional experience working with
                Spring Boot Framework (micro services) and Angular/React.
              </li>
              <li>
                Experience in working with Spring MVC, Hibernate, Spring Data
                JPA, TypeScript, jQuery, REST APIs and Oracle/MySql databases.
              </li>
              <li>
                Hands-on version control tool SVN, Git and code storage tool
                Github and Gitlab.
              </li>
              <li>
                Strong skills in planning and executing the functionality of the
                application.
              </li>
              <li>
                Ability to follow sprint/project plans and meet commitments.
              </li>
              <li>
                Debug programs to resolve issues whenever reported or
                encountered by the QA team in the sprint delivery phase.
              </li>
            </ul>
          </p>
        </div>

        <div className="about-tabs">
          <ul className="tabs">
            <li
              className={activetabIndex === 0 ? "tab active activeText" : "tab"}
              id="skill-head"
              style={
                activetabIndex === 0
                  ? { color: "var(--red)" }
                  : { color: "var(--primary-text)" }
              }
              onClick={() => viewTab(0)}
            >
              Main Skills
            </li>
            <li
              className={activetabIndex === 1 ? "tab active activeText" : "tab"}
              id="exp-head"
              style={
                activetabIndex === 1
                  ? { color: "var(--red)" }
                  : { color: "var(--primary-text)" }
              }
              onClick={() => viewTab(1)}
            >
              Experience
            </li>
            <li
              className={activetabIndex === 2 ? "tab active activeText" : "tab"}
              id="edu-head"
              style={
                activetabIndex === 2
                  ? { color: "var(--red)" }
                  : { color: "var(--primary-text)" }
              }
              onClick={() => viewTab(2)}
            >
              Education
            </li>
            {/* <li
              className={activetabIndex === 3 ? "tab active activeText" : "tab"}
              id="cert-head"
              style={
                activetabIndex === 3
                  ? { color: "var(--red)" }
                  : { color: "var(--primary-text)" }
              }
              onClick={() => viewTab(3)}
            >
              Certification
            </li> */}
          </ul>

          {activetabIndex === 0 && (
            <div className="tab-contents skills" id="skills">
              <div className="tab-content">
                <h3>Java Development</h3>
                <p>Develop Spring Framework based Java Applications</p>
              </div>
              <div className="tab-content">
                <h3>Web Development</h3>
                <p>Creating optimized & responsive websites/webapps</p>
              </div>
              <div className="tab-content">
                <h3>Adaptability</h3>
                <p>
                  Loves to learn new interesting Technologies. I have the basic
                  knowldge in Flutter, Docker & Kubernetes
                </p>
              </div>
            </div>
          )}

          {activetabIndex === 1 && (
            <div className="tab-contents experience">
              <div
                className="tab-content link"
                onClick={()=>window.open('https://www.techversantinfotech.com/')}
              >
                <h3>Software Engineer</h3>
                <p>Techversant</p>
              </div>
              <div
                className="tab-content link"
                onClick={()=>window.open('http://www.interlandtech.com/')}
              >
                <h3>Software Developer</h3>
                <p>Interland Technolgy Services</p>
              </div>
            </div>
          )}
          {activetabIndex === 2 && (
            <div className="tab-contents education">
              <div
                className="tab-content link"
                onClick={()=>window.open('http://www.cectl.ac.in/')}
              >
                <h3>B.Tech, Computer Science and Engineering</h3>
                <p>College of Engineering Cherthala : 2015-2019</p>
              </div>
              <div
                className="tab-content link"
                onClick={()=>window.open('https://goo.gl/maps/t6g7cUmn6u1D7BJH6')}
              >
                <h3>Higher Secondary Education</h3>
                <p>S.D.P.Y.H.S.S Palluruthy : 2013-2015</p>
              </div>
              <div
                className="tab-content link"
                onClick={()=>window.open('https://goo.gl/maps/t6g7cUmn6u1D7BJH6')}
              >
                <h3>High School</h3>
                <p>S.D.P.Y.B.H.S.S Palluruthy : 2013</p>
              </div>
            </div>
          )}
          {activetabIndex === 3 && (
            <div className="tab-contents certification">
              <div
                className="tab-content link"
                onClick={()=>window.open('https://www.hackerrank.com/certificates/93b9181c553a')}
              >
                <h3>React Certification</h3>
                <p>HackerRank</p>
              </div>
              <div
                className="tab-content link"
                onClick={()=>window.open('https://google.com')}
              >
                <h3>JavaScript Algorithms and Data Structures</h3>
                <p>freeCodeCamp.org</p>
              </div>
              <div
                className="tab-content link"
                onClick={()=>window.open('https://google.com')}
              >
                <h3>Responsive Web Design</h3>
                <p>freeCodeCamp.org</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
