import { Col, Container, Row } from "react-bootstrap";
import "../experience/experience.css";

const Experience = () => {
  return (
    <>
      <Container id="experience" className="containerSobreMi">
        <Row className="p-0 rowSobreMi">
          <Col className="colTittleSkills">
            <p className="tittleSkills">EXPERIENCE</p>
          </Col>

          <Col className="colExperience">
            <div>
              <p className="nameJobRow">
                Trainee developer
                <span className="company"> - Vortex Software</span>
                <span className="dates"> - Mar 2024 - Present</span>
              </p>
              <p className="descriptionJobRow">
                Full Stack development and programming within a technical team.
              </p>
              <p className="projectTitleRow">PROJECTS</p>
              <p className="projectsRow">
                EXCEPCIÓN: Web app for creating, viewing, and editing travel
                packages. Features a user-friendly interface for managing
                itineraries and bookings.
              </p>
              <p className="technologiesJobRow">
                Technologies: ReactJS, Typescript, Styled Component.
                <br />
                <br />
              </p>
              <p className="projectsRow">
                PEDIDOS: Web and mobile app for sales reps with features for product tracking, sales performance, order monitoring, and employee geolocation.
              </p>
              <p className="technologiesJobRow">
                Technologies: ReactJS, Sass, Redux, React Native, NestJs,
                PostgresSQL.
                <br />
                <br />
              </p>
              <div>
                <p className="nameJobRow">
                  Front End developer
                  <span className="company"> - Freelance</span>
                  <span className="dates"> - Nov 2023 - Present</span>
                </p>
                <p className="descriptionJobRow">
                  Development of customized websites
                </p>
                <p className="projectTitleRow">PROJECTS</p>
                <p className="projectsRow">
                  SABIOAI: Web app for universities to connect professors with AI tools used by students.
                </p>
                <p className="technologiesJobRow">
                  Technologies: ReactJS, Redux, Css.
                  <br />
                  <br />
                </p>
                <p className="projectsRow">
                  DMV: Web app for event attendance confirmation and access to details like event info, photo gallery, music, and gifts.
                </p>
                <p className="technologiesJobRow">
                  Technologies: ReactJS, Tailwind.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience;
