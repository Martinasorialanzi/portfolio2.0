import React from 'react'
import { Col, Container, Row, Stack } from "react-bootstrap";
import "../skills/skills.css";
import { FaReact,FaHtml5,FaCss3Alt,FaBootstrap,FaNode,FaGithub,FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb,SiMicrosoftsqlserver,SiPostman } from "react-icons/si";
import { LiaGitAlt } from "react-icons/lia";

const Skills = () => {
  return (
    <>
    <Container id="skills" className="container1 p-2 ">
    <Row className='p-0 rowSkills'>

    <Col className='colTittleSkills'>
        <p className="textTecnologias text-center mb-4 mt-0">Skills</p>
    </Col>
    <Col className='colSkills'>
        <Row className="justify-content-center" >
          <Col xs={6} md={3} xl={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <FaHtml5 style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">HTML</h5>
            </Stack>
 
          </div>
     
 

          </Col>
          <Col xs={6} xl={3} md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <FaCss3Alt style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">CSS</h5>
            </Stack>
 
          </div>
     
 

          </Col>
          <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <FaBootstrap  style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">BOOTSTRAP</h5>
            </Stack>
 
          </div>
     
 

          </Col>
          <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <IoLogoJavascript style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">JAVASCRIPT</h5>
            </Stack>
 
          </div>
     
 

          </Col>
          <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <FaReact style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">REACT</h5>
            </Stack>
 
          </div>
     
 

          </Col>
          <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon mt-3" >
            <FaNode style={{color:"white"}} size={70}/>
            </Stack>
 
          </div>
          </Col>
          <Col xs={6} xl={3}md={3}>
         
         <div>
           <Stack className="justify-content-center text-center stackIcon">
           <LiaGitAlt style={{color:"white"}} size={70}/>
           <h5 className="nombreTecnologia">GIT</h5>
           </Stack>

         </div>
    


         </Col>
         <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <FaGithub style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">GITHUB</h5>
            </Stack>
 
          </div>
     
 

          </Col>
          <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <SiMongodb style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">MONGODB</h5>
            </Stack>
 
          </div>
     
 

          </Col>
          <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <SiMicrosoftsqlserver style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">MS SQL </h5>
            </Stack>
 
          </div>
          </Col>
          <Col xs={6} xl={3}md={3}>
         
          <div>
            <Stack className="justify-content-center text-center stackIcon">
            <SiPostman style={{color:"white"}} size={70}/>
            <h5 className="nombreTecnologia">POSTMAN</h5>
            </Stack>
 
          </div>
          </Col>

          
      
        </Row>
        </Col>
  
      </Row>
    </Container>
  </>
  )
}

export default Skills