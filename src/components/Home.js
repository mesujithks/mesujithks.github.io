import React, { useEffect } from "react";
import Baffle from "baffle-react";

const Home = () => {
  const [baffleText, setBaffleText] = React.useState("FullStack Developer");
  const [update, setUpdate] = React.useState(true);
  const [obfuscate, setObfuscate] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    var i = 1;
    let changeTitle = () => {
      let titles = ["FullStack Developer", "Java Developer", "Programmer"];
      if (i === titles.length) {
        i = 0;
      }
      setBaffleText(titles[i++]);
      setObfuscate(!obfuscate);
      setUpdate(!update);
    };

    setInterval(changeTitle, 3200);
  }, []);

  return (
    <div className="main-wrapper">
      <main className="main">
        <div className="main-content">
          <h3>Hi There</h3>
          <h1>
            I'm <span>Sujith K S</span>
          </h1>
          <h2 id="main-title">
            I am a &nbsp;
            <Baffle
              speed={120}
              characters="█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒"
              exclude={[" ", "!"]}
              obfuscate={obfuscate}
              update={update}
              revealDuration={1500}
              revealDelay={1500}
            >
              {baffleText}
            </Baffle>
          </h2>
          <div></div>

          <div className="btn-grp">
            <div
              className="btn primary"
              onClick={ () => window.open('./assets/resources/resume.pdf')}
            >
              <p>Get Resume</p>
            </div>
            <div
              className=" btn secondary"
              onClick={ () => window.open("#contact", "_self") }
            >
              <p>Contact Me</p>
            </div>
          </div>
        </div>

        <div className="main-img">
          <img
            className="hero-img"
            src="./assets/images/hero.svg"
            alt="Illustration of a programmer"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
