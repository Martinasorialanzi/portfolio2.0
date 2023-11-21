import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../about/about.css"
// import fotCv from "../../assets/img/fotCv.jpg"
import { Link } from 'react-router-dom'
// import pdf from '../../assets/cv/CvMartinaSoriaLanzi.pdf'


const About = () => {
  return (
    <>
    <Container id="sobreMi" className='containerSobreMi'>
    <Row className='p-0'>
      <Col className='colTittleSkills'>
      <p className='tittleSkills'>About me</p>
      </Col>
 
        <Col className='colSobreMi justify-content-center '>
        <p>
        Hello, I am Martina Soria Lanzi, I am 25 years old. 
        <br/>
        In March 2021 I graduated from the Industrial Engineering degree at the Universidad del Norte Santo Tomas de Aquino. In May 2022 I started the FullStack course at RollingCode School in order to enter the world of programming.
        <br/>
        Currently I continue to learn and acquire new skills while carrying out different projects to put into practice everything I have learned and continue growing.

        <br/><br/>
        You can learn more about my professional career below 👇


            <br/>
          {/* <Link to={pdf} className="colSobreMi" target="_blank" rel="noopener noreferrer" download="CvMartinaSoriaLanzi.pdf">Descarga mi CV</Link> */}
            
        </p>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default About