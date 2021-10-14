import React from "react";

const Portfolio = () => {
  const projectsData = [
    {
      projectName: "mesujithks.github.io",
      projectType: "Web App",
      projectDescription: "My Portfoilo App",
      projectTechnologies: "React JS, jQuery, CSS, etc.",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/mesujithks.github.io",
    },
    {
      projectName: "WhatsTracker",
      projectType: "Chrome Extension, Telegaram Bot",
      projectDescription:
        "It is a custome made WhatsApp (Web) Contact Online Tracker Chrome extension with a Telaegarm Bot Notifier.",
      projectTechnologies: "JavaScript, jQuery, Python",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/WhatsTracker",
    },
    {
      projectName: "VaccineInfo-V2",
      projectType: "Telegaram Bot",
      projectDescription: "COVID-19 Vaccine Slot Finder Bot",
      projectTechnologies: "Python",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/VaccineInfo-V2",
    },
    {
      projectName: "VaccineInfo",
      projectType: "Chrome Extension, Telegaram Bot",
      projectDescription: "COVID-19 Vaccine Slot Finder Bot",
      projectTechnologies: "JavaScript, jQuery, Python",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/VaccineInfo",
    },
    {
      projectName: "Instagaram UI",
      projectType: "Mobile App",
      projectDescription: "Instagram App UI builded on Flutter",
      projectTechnologies: "Flutter, Dart",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/instagaram-flutter-ui",
    },
    {
      projectName: "AngularBlog",
      projectType: "Web App",
      projectDescription: "Sample Blog Web App build with Angular Framework",
      projectTechnologies: "Angular, CSS, etc.",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/angular-blog",
    },
    {
      projectName: "Interland Review Projects",
      projectType: "Web App, Java Application",
      projectDescription: "Collection of sample workout projects",
      projectTechnologies: "Angular, HTML, Java, JavaScript, CSS, etc.",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/interland-review-projects",
    },
    {
      projectName: "My Django Website",
      projectType: "Web App",
      projectDescription: "Sample web appusing Django framework",
      projectTechnologies: "Python",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/my-django-website",
    },
    {
      projectName: "Online Course Portal",
      projectType: "Web App",
      projectDescription: "This project aims at creating a Courses portal for a campus/organization",
      projectTechnologies: "PHP, JavaScript, CSS",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/asd-project",
    },
    {
      projectName: "zealous-cec",
      projectType: "Web App",
      projectDescription: "zealous-cec techfest sample project",
      projectTechnologies: "HTML, JavaScript, CSS",
      projectImage: "./assets/images/projects/default_project.jpg",
      projectLink: "https://github.com/mesujithks/zealous-cec",
    },
  ];

  const [activetabIndex, setActivetabIndex] = React.useState(0);

  const [projectList, setProjectList] = React.useState(projectsData);

  const [projectListData, setProjectListData] = React.useState(
    projectsData.slice(0, projectsData.length > 6 ? 6 : projectsData.length)
  );

  const [isViewMore, setIsViewMore] = React.useState(false);

  const viewTab = (currentIndex) => {
    switch (currentIndex) {
      case 0:
        setProjectList(projectsData);
        setProjectListData(
          projectsData.slice(
            0,
            projectsData.length > 6 ? 6 : projectsData.length
          )
        );
        break;
      case 1:
        setProjectList(
          projectsData.filter((item) => item.projectType === "Web App")
        );
        setProjectListData(
          projectsData
            .filter((item) => item.projectType === "Web App")
            .slice(0, projectsData.length > 6 ? 6 : projectsData.length)
        );
        break;
      case 2:
        setProjectList(
          projectsData.filter((item) => item.projectType !== "Web App")
        );
        setProjectListData(
          projectsData
            .filter((item) => item.projectType !== "Web App")
            .slice(0, projectsData.length > 6 ? 6 : projectsData.length)
        );
        break;
      default:
        setProjectList(projectsData);
        setProjectListData(
          projectsData.slice(
            0,
            projectsData.length > 6 ? 6 : projectsData.length
          )
        );
        break;
    }

    setActivetabIndex(currentIndex);
    setIsViewMore(false);
  };

  const handleViewMore = () => {
    setProjectListData(projectList);
    setIsViewMore(true);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <h3>Here are some of my recent works</h3>

      <ul className="project-tabs">
        <li
          className={
            activetabIndex === 0 ? "project-tab active-project" : "project-tab"
          }
          id="all-project-tab"
          onClick={() => viewTab(0)}
        >
          All
        </li>
        <li
          className={
            activetabIndex === 1 ? "project-tab active-project" : "project-tab"
          }
          id="website-project-tab"
          onClick={() => viewTab(1)}
        >
          Web
        </li>
        <li
          className={
            activetabIndex === 2 ? "project-tab active-project" : "project-tab"
          }
          id="other-project-tab"
          onClick={() => viewTab(2)}
        >
          Other
        </li>
      </ul>

      <div className="works">
        <div className="all-works project-content">
          {projectListData.map((project, index) => {
            return (
              <div className="project-card" key={index}>
                <img
                  src={project.projectImage}
                  alt={project.projectName}
                  className="project-img"
                />
                <div className="card-content">
                  <h4>{project.projectName}</h4>
                  <h5>
                    <i className="website-i"></i>
                    {project.projectType}
                  </h5>
                  <p>{project.projectDescription}</p>
                  <p>
                    <br />
                    <strong>Technologies Used : &nbsp;</strong>
                    {project.projectTechnologies}
                  </p>
                  <div className="card-icons">
                    <div
                      className="card-icon"
                      rel="noopener"
                      onClick={() => window.open(project.projectLink)}
                    >
                      <i className="fa fa-github card-i"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {projectList.length > 6 && !isViewMore && (
          <div className="btn view-more" onClick={() => handleViewMore()}>
            <p id="view-more-content">View More</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
