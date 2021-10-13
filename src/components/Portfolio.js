import React from "react";

const Portfolio = () => {
  const [activetabIndex, setActivetabIndex] = React.useState(0);

  const viewTab = (currentIndex) => {
    setActivetabIndex(currentIndex);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

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
          id="android-project-tab"
          onClick={() => viewTab(2)}
        >
          Android
        </li>
        <li
          className={
            activetabIndex === 3 ? "project-tab active-project" : "project-tab"
          }
          id="other-project-tab"
          onClick={() => viewTab(3)}
        >
          Other
        </li>
      </ul>

      <div className="works">
        <div className="all-works project-content">
          <div className="project-card">
            <img
              src="./assets/images/projects/polygram.webp"
              alt="Polygram"
              className="project-img"
            />
            <div className="card-content">
              <h4>Polygram</h4>
              <h5>
                <i className="website-i"></i>Web App
              </h5>
              <p>
                A simple, convenient & way to seek, share & ask opinions, views
                & questions with society for better decision making.
              </p>
              <p>
                <br />
                <strong>Technologies Used :</strong>React, &nbsp;Express,
                &nbsp;Node.js, &nbsp;MongoDB, &nbsp;SCSS etc.
              </p>

              <div className="card-icons">
                <div
                  className="card-icon"
                  rel="noopener"
                  onclick="window.open('https://github.com/mesujithks/polygram-frontend');"
                >
                  <i className="fa fa-github card-i"></i>
                </div>
                <div
                  className="card-icon demo"
                  rel="noopener"
                  onclick="window.open('https://polygram.netlify.app');"
                >
                  <i className="fa fa-link card-i"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img
              src="./assets/images/projects/react-rhino.webp"
              alt="React Rhino"
              className="project-img"
            />
            <div className="card-content">
              <h4>react-rhino</h4>
              <h5>
                <i className="website-i"></i>npm Package
              </h5>
              <p>A simple global state management library for React.js</p>
              <p>
                <br />
                <strong>Technologies Used :</strong> Typescript, &nbsp;React.js
              </p>

              <div className="card-icons">
                <div
                  className="card-icon"
                  rel="noopener"
                  onclick="window.open('https://github.com/mesujithks/react-rhino');"
                >
                  <i className="fa fa-github card-i"></i>
                </div>
                <div
                  className="card-icon demo"
                  rel="noopener"
                  onclick="window.open('https://npmjs.com/package/react-rhino');"
                >
                  <i className="fa fa-link card-i"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="./assets/images/projects/whatsend.webp"
              alt="WhatSend"
              className="project-img"
            />
            <div className="card-content">
              <h4>WhatSend</h4>
              <h5>
                <i className="website-i"></i>Web App
              </h5>
              <p>
                Send Whatsapp message without saving the number in your contact.
              </p>
              <p>
                <br />
                <strong>Technologies Used :</strong> React, &nbsp;CSS etc.
              </p>

              <div className="card-icons">
                <div
                  className="card-icon"
                  rel="noopener"
                  onclick="window.open('https://github.com/mesujithks/whatsend');"
                >
                  <i className="fa fa-github card-i"></i>
                </div>
                <div
                  className="card-icon demo"
                  rel="noopener"
                  onclick="window.open('https://whatsend.live');"
                >
                  <i className="fa fa-link card-i"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
