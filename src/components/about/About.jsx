import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../about/about.css";
// import fotCv from "../../assets/img/fotCv.jpg"
import { Link } from "react-router-dom";
import pdf from "../../assets/cv/ResumeMartinaSoriaLanzi.pdf";

const About = () => {
  
  return (
    <>
      <Container id="about" className="containerSobreMi">
        <Row className="p-0 rowSobreMi">
          <Col className="colTittleSkills">
            <p className="tittleSkills">ABOUT ME</p>
          </Col>

          <Col className="colSobreMi justify-content-center ">
            <div>
              <p className="nameRow">Hello, I'm Martina Soria Lanzi! 👩‍💻</p>
            <p>
            
              Welcome to my digital space! As a web developer with an Industrial Engineering background, I’m driven by a passion for coding and continuous learning.
              <br />
              <br />
             
              Explore my evolving journey below! 👇
              <br />
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
