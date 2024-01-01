import React from "react";
import "../projects/projects.css";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Container id="sobreMi" className="containerProjects">
        <Row className="p-0 rowProjects">
          <Col className="colTittleProjects">
            <p className="tittleProjects">Projects</p>
          </Col>

          <Col className="colProjects justify-content-center" id="cards">
          <div className="stacking-card">
              <div className="card__content" style={{ '--index': 1 }}>
                {/* Your card content goes here */}
              </div>
            </div>
            <div className="stacking-card">
              <div className="card__content" style={{ '--index': 2 }}>
                {/* Your card content goes here */}
              </div>
            </div>
            <div className="stacking-card">
              <div className="card__content" style={{ '--index': 3 }}>
                {/* Your card content goes here */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
