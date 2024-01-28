import githubicon from "../assets/github.svg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="body">
      <div className="about">
        <h1>❔</h1>
        <p>Rate cats and see the scoreboard!</p>

        <p>
          This is a Full Stack project using React, Node.js, Express and MySQL.
        </p>
        <p>

          It fetches cat images from {" "}
          <a href="https://thecatapi.com/">The Cat API</a> and stores the
          ratings in a MySQL database.
        </p>

        <p>
          Developed by <a href="http://www.nestoririondo.com">Néstor Iriondo</a>
        </p>
        <a href="https://github.com/nestoririondo/ratemycat">
          <img src={githubicon} alt="github icon" />
        </a>
      </div>
    </div>
  );
};

export default About;
