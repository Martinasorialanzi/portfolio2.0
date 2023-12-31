import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../about/about.css";
// import fotCv from "../../assets/img/fotCv.jpg"
import { Link } from "react-router-dom";
import pdf from "../../assets/cv/CvMartinaSoriaLanzi.pdf";

const About = () => {
  return (
    <>
      <Container id="sobreMi" className="containerSobreMi">
        <Row className="p-0 rowSobreMi">
          <Col className="colTittleSkills">
            <p className="tittleSkills">About me</p>
          </Col>

          <Col className="colSobreMi justify-content-center ">
            <p>
              Hello, I'm Martina Soria Lanzi! 👩‍💻
              <br />
              <br />
              Welcome to my digital realm! I'm a passionate web developer with a
              degree in Industrial Engineering.
              <br />
              <br />
              I leaped into the programming world by joining RollingCode
              School's FullStack course in May 2022.
              <br />
              <br />
              Every day, I embrace new challenges and projects to apply and
              expand my skills, fostering continuous professional growth.
              <br />
              <br />
              Explore my evolving journey below! 👇
              <br />
              <Link
                to={pdf}
                className="colSobreMi"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
