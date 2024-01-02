import React from "react";
import "../projects/projects.css";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import projectData from "../../assets/projects.json"

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,

    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <>
      <Container className="containerProjects">
        <Row className="p-0 rowProjects">
          <Col className="colTittleProjects "xl={6} md={6} >
            <p className="tittleProjects">Projects</p>
          </Col>
          <Col className="colProjects justify-content-center" xl={6} md={6}>
            <Slider {...settings} className=" slider mx-4 p-1 ">
              {projectData.projects.map((project)=>(
                <Card className="card" >
                <Card.Body>
                  <Card.Title className="cardTittle">{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 cardSubtittle">
                   {project.description}
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link className="cardLink" href={project.weblink}>Web Link</Card.Link>
                  <Card.Link className="cardLink" href={project.github}>GitHub</Card.Link>
                </Card.Body>
              </Card>
              ))}
              
       
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
