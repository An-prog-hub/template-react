import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Image from "./images/myphoto.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img src={Image} alt="myphoto" />

      <div className="headerText">
        <h1>
          Hi ⚡, I'm {""}
          <a href="https://linkedin.com/in/ankushchauhan14" target="_blank">
            Ankush Chauhan
          </a>
        </h1>
      </div>
      <div className="text_body">
        Hey 👋 I'm Ankush, a freelancer, developer, writer with
        interests in entrepreneurship and decentralise finance. <br />
        Developing new ways to make human life more accessible and friendly on
        the planet :)
      </div>
      <Button
        className="buttons"
        variant="contained"
        href="/about"
        color="primary"
      >
        About Me <ArrowForwardIosIcon />
      </Button>
      <Button
        className="buttons"
        variant="contained"
        href="/projects"
        color="primary"
      >
        Projects
        <ArrowForwardIosIcon />
      </Button>
      <Button
        className="buttons"
        variant="contained"
        href="/notes"
        color="primary"
      >
        Notes <ArrowForwardIosIcon />
      </Button>

      <div className="socials-links">
        <a
          className="social-link"
          href="https://linkedin.com/in/ankushchauhan14"
          target="_blank"
        >
          <LinkedInIcon style={{ color: "orange" }} fontSize="large" />
        </a>
        <a
          className="social-link"
          href="https://twitter.com/anproghub"
          target="_blank"
        >
          <TwitterIcon style={{ color: "orange" }} fontSize="large" />
        </a>
        <a
          className="social-link"
          href="https://github.com/An-prog-hub"
          target="_blank"
        >
          <GitHubIcon style={{ color: "orange" }} fontSize="large" />
        </a>
        <a
          className="social-link"
          href="mailto:ac.ankushchauhan.2006@gmail.com"
          target="_blank"
        >
          <MailOutlineIcon style={{ color: "orange" }} fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default App;
