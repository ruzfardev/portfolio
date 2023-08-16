import React from "react";
import "./style.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNodeJs,
  faFigma,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import cv from "../../assets/Resume-Farrukh-Ruzmetov.pdf";
export const Hero = () => {
  const handleHref = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero flex section" id="home">
      <div className="hero-container mt-5 gap-4 p-3 w-10 mx-auto flex-wrap justify-content-between align-items-center flex">
        <div className="left w-5">
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient text-primary">Farrukh</span>
          </h1>
          <h2 className="hero-subtitle">I build things for the web.</h2>
          <p
            className="
            hero-description
            "
          >
            I'm a web developer based in Uzbekistan. I have a passion for web
            development and love to create for web and mobile devices.
            Currently, I am working as front-end developer at{" "}
            <a
              className="text-gradient text-decoration-none"
              style={{
                fontWeight: "bold",
              }}
              href="https://www.datamicron.com/"
            >
              Datamicron
            </a>
            .
          </p>
          <div className="flex cta gap-3">
            <Button
              text
              raised
              icon="pi pi-download"
              label="Download CV"
              onClick={() => {
                const a = document.createElement("a");
                a.href = cv;
                a.download = "Farrukh-Ruzmetov.pdf";
                a.click();
              }}
            />
            <Button
              text
              raised
              icon="pi pi-user"
              label="About me"
              onClick={() => handleHref("about")}
            />
          </div>
          <div className="flex gap-1 my-5">
            <Button
              icon="pi pi-github"
              rounded
              raised
              text
              aria-label="Github"
              onClick={() =>
                window.open("https://github.com/ruzfardev", "_blank")?.focus()
              }
            />
            <Button
              icon="pi pi-telegram"
              rounded
              raised
              text
              aria-label="Telegram"
              onClick={() =>
                window.open("https://t.me/fm_ruzmetov", "_blank")?.focus()
              }
            />
            <Button
              icon="pi pi-instagram"
              rounded
              raised
              text
              aria-label="Instagram"
              onClick={() =>
                window
                  .open("https://www.instagram.com/fm_ruzmetov/", "_blank")
                  ?.focus()
              }
            />
            <Button
              icon="pi pi-linkedin"
              rounded
              raised
              text
              aria-label="Linkedin"
              onClick={() =>
                window
                  .open(
                    "https://www.linkedin.com/in/farrukh-ruzmetov-298761203",
                    "_blank"
                  )
                  ?.focus()
              }
            />
          </div>
        </div>
        <div className="right flex gap-4">
          <div className="flex gap-3 flex-column justify-content-center">
            <Card
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="p-2 hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center"
            >
              <div className="flex flex-column align-items-center gap-3">
                <div className="text-gradient flex gap-3">
                  <FontAwesomeIcon icon={faHtml5} size="3x" />
                  <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                </div>
                <h4>HTML and CSS</h4>
              </div>
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="p-2 hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center"
            >
              <div className="flex flex-column align-items-center gap-3">
                <FontAwesomeIcon icon={faGitAlt} size="3x" />
                <h4>Git</h4>
              </div>
            </Card>
          </div>
          <div className="flex gap-3 flex-column justify-content-center">
            <Card
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="p-2 hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center"
            >
              <div className="flex flex-column align-items-center gap-3">
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                <h4>Node.js</h4>
              </div>
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="p-2 hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center"
            >
              <div className="flex flex-column align-items-center gap-3">
                <FontAwesomeIcon icon={faJsSquare} size="3x" />
                <h4>JavaScript</h4>
              </div>
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="p-2 hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center"
            >
              <div className="flex flex-column align-items-center gap-3">
                <FontAwesomeIcon icon={faReact} size="3x" />
                <h4>React.js</h4>
              </div>
            </Card>
          </div>
          <div className="flex gap-3 flex-column justify-content-center">
            <Card
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="p-2 hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center"
            >
              <div className="flex flex-column align-items-center gap-3">
                <FontAwesomeIcon icon={faFigma} size="3x" />
                <h4>Figma</h4>
              </div>
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="p-2 hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center"
            >
              <div className="flex flex-column align-items-center gap-3">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <h4>Github</h4>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
