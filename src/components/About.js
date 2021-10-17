import React from "react";

const About = () => {
  const aboutData = [
    {
      title: "Java Development",
      subTitle: "Develop Spring Framework based Java Applications",
      type: 0,
      link: null,
    },
    {
      title: "Web Development",
      subTitle: "Creating optimized & responsive websites/webapps",
      type: 0,
      link: null,
    },
    {
      title: "Adaptability",
      subTitle:
        "Loves to learn new interesting Technologies. I have the basic knowldge in Flutter, Docker & Kubernetes",
      type: 0,
      link: null,
    },
    // {
    //   title: "Software Engineer",
    //   subTitle: "Techversant : 2021 - Present",
    //   type: 1,
    //   link: "https://www.techversantinfotech.com/",
    // },
    {
      title: "Software Developer",
      subTitle: "Interland Technolgy Services : 2019 - 2021",
      type: 1,
      link: "http://www.interlandtech.com/",
    },
    {
      title: "B.Tech, Computer Science and Engineering",
      subTitle: "College of Engineering Cherthala : 2015-2019",
      type: 2,
      link: "http://www.cectl.ac.in/",
    },
    {
      title: "Higher Secondary Education",
      subTitle: "S.D.P.Y.H.S.S Palluruthy : 2013-2015",
      type: 2,
      link: "https://goo.gl/maps/R48AS9pivfgpxsLp9",
    },
    {
      title: "High School",
      subTitle: "S.D.P.Y.B.H.S.S Palluruthy : 2013",
      type: 2,
      link: "https://goo.gl/maps/R48AS9pivfgpxsLp9",
    },
    {
      title: "Rising Star Award (Most Valuable Fresher)",
      subTitle: "INTERLAND TECHNOLOGY SERVICES : 2020",
      type: 3,
      link: "https://photos.app.goo.gl/ffsoNGysZ5G57hPY6",
    },
    {
      title: "Introduction to Modern Application Development",
      subTitle: "NPTEL : 2017",
      type: 3,
      link: "https://nptel.ac.in/noc/Ecertificate/?q=linkedin/noc17-cs06/NPTEL17CS0626300170FN.jpg",
    },
  ];

  const [activetabIndex, setActivetabIndex] = React.useState(0);

  const [aboutDataList, setAboutDataList] = React.useState(aboutData.filter((item) => item.type === activetabIndex));

  const viewTab = (currentIndex) => {
    setAboutDataList(aboutData.filter((item) => item.type === currentIndex));
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
            <li
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
            </li>
          </ul>

          <div className="tab-contents experience">
            {aboutDataList.map((item, index) => {
              return (
                <div
                  className={
                    item.link !== null ? "tab-content link" : "tab-content"
                  }
                  key={index}
                  onClick={item.link !== null ? () => window.open(item.link) : null}
                >
                  <h3>{item.title}</h3>
                  <p>{item.subTitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
