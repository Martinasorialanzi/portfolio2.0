import React, { useRef, useState, useEffect } from "react";
import "../projects/projects.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import projectData from "../../assets/projects.json";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
   
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode:true,
          centerPadding: "-15px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Container id="projects"className="containerProjects">
        <Row className="p-0 rowProjects">
          <Col className="colTittleProjects " xl={6} md={6}>
            <p className="tittleProjects">Projects</p>
          </Col>
          <Col className="colProjects justify-content-center" xl={6} md={6}>
            <Slider {...settings} className=" slider mx-4 p-1 ">
              {projectData.projects.map((project) => (
                <Card className="card" key={project._id}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="image"
                  />
                  <div className=" divBadge d-flex align-items-center justify-content-center flex-wrap">
                     {project.technologies.map((technologie) => (
                      <Badge className="badgeTech" key={project._id}>
                        {technologie}
                      </Badge>
                    ))}
</div>
                  <Card.Body className="d-flex align-items-center justify-content-center flex-wrap">
                    <Card.Title className="cardTittle">
                      {project.title}
                    </Card.Title>

                 <div className="divDescription d-flex align-items-center justify-content-center flex-wrap">
                    <Card.Text className="description">{project.description}</Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link
                      className="cardLink"
                      href={project.weblink}
                      target="_blank"
                    >
                      Web Link
                    </Card.Link>
                    <Card.Link
                      className="cardLink"
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Card.Link>
                  </Card.Footer>
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
