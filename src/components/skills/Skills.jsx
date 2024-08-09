import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import "../skills/skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { SiTypescript, SiNestjs, SiPostgresql, SiJira } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMicrosoftsqlserver, SiPostman } from "react-icons/si";
import { LiaGitAlt } from "react-icons/lia";
import { motion } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <Container id="skills" className="container1 p-2 ">
        <Row className="p-0 rowSkills">
          <Col className="colTittleSkills">
            <p className="textTecnologias text-center mb-4 mt-0">SKILLS</p>
          </Col>
          <Col className="colSkills">
            <Row className="justify-content-center">
              <Col xs={6} md={3} xl={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <FaHtml5 style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">HTML</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <FaCss3Alt style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">CSS</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <FaSass style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">SASS CSS</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <SiTailwindcss style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">TAILWIND</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <IoLogoJavascript style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">JAVASCRIPT</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <SiTypescript style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">TYPESCRIPT</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>

              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <FaReact style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">REACT</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <TbBrandNextjs style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">NEXT JS</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon mt-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <FaNode style={{ color: "white" }} size={70} />
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <SiNestjs style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">NEST JS</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <SiMongodb style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">MONGODB</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <SiPostgresql style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">POSTGRESQL</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <LiaGitAlt style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">GIT</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <FaGithub style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">GITHUB</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>

              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <SiPostman style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">POSTMAN</h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
              <Col xs={6} xl={3} md={3}>
                <div>
                  <Stack className="justify-content-center text-center stackIcon">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <SiJira style={{ color: "white" }} size={70} />
                      <h5 className="nombreTecnologia">JIRA </h5>
                    </motion.a>
                  </Stack>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
