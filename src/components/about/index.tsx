import React from "react";
import { Divider } from "../ui/divider";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faUserGraduate,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export const About = () => {
  return (
    <section className="about section w-full" id="about">
      <Divider title="About Me" />
      <div className="timeline_container w-5">
        <div className="timeline">
          <div className="timeline-container primary">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="300"
              className="timeline-icon"
            >
              <i>
                <FontAwesomeIcon icon={faUserGraduate} size="2x" />
              </i>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="300"
              className="timeline-body p-card raised p-component"
            >
              <h4 className="timeline-title">
                <span className="badge">
                  Westminster International University in Tashkent
                </span>
              </h4>
              <p>
                Currently, I am full time student at Westminster International
                University in Tashkent. I am studying Computer Science and
                Software Engineering. This year I am going to graduate from
                university. I am looking for a job as a front-end developer. I
                have a passion for web development and love to create for web
                and mobile devices.
              </p>
              <p className="timeline-subtitle">2020 - Present</p>
            </div>
          </div>
          <div className="timeline-container danger">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="300"
              className="timeline-icon"
            >
              <i>
                <FontAwesomeIcon icon={faSchool} size="2x" />
              </i>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="300"
              className="timeline-body p-card raised p-component"
            >
              <h4 className="timeline-title">
                <span className="badge">Secondary School №37 in Khorezm</span>
              </h4>
              <p>
                I graduated from Secondary School №37 in Khorezm. I was a
                student of this school for 11 years. I was a good student and
                always tried to be the best in my class. I was a member of the
                school's football team. I was a captain of the team.
              </p>
              <p className="timeline-subtitle">2009 - 2020</p>
            </div>
          </div>
          <div className="timeline-container">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="300"
              className="timeline-icon"
            >
              <i>
                <FontAwesomeIcon icon={faBriefcase} size="2x" />
              </i>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="300"
              className="timeline-body p-card raised p-component"
            >
              <h4 className="timeline-title">
                <span className="badge">Work Experience</span>
              </h4>
              <p>
                I have been working as a front-end developer for 2 years at
                Datamicron. I have been working on different projects. I have
                worked on a projecs such as &nbsp;
                <a
                  className="text-decoration-none text-gradient"
                  href="https://datamicron.com/neura-chat.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falcon
                </a>
                , &nbsp;
                <a
                  className="text-decoration-none text-gradient"
                  href="https://datamicron.com/eagle-eye.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eagle Eye
                </a>
                . Right now I am working on a project called Eagle Eye. This is
                very big project and I am working on it as a front-end
                developer.
              </p>
              <p className="timeline-subtitle">2021 - Present (Datamicron)</p>
            </div>
          </div>
          <div className="timeline-container">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="300"
              className="timeline-body p-card raised p-component"
            >
              <h4 className="timeline-title">
                <span className="badge">Work Experience - QA Engineer</span>
              </h4>
              <p>
                I have worked as a QA Engineer for 1 year at Datamicron. I have
                tested different projects. I have tested a projecs such as
                &nbsp;
                <a
                  className="text-decoration-none text-gradient"
                  href="https://datamicron.com/neura-chat.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falcon
                </a>
                , &nbsp;. I was responsible for all platforms of the project:
                Web, Android, iOS.
              </p>
              <p className="timeline-subtitle">2020 - 2021 (Datamicron)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
