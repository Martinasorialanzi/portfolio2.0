import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../navbar/navbar.css";


const Navegador = () => {
    const [colorNav, setColorNav] = useState(false);

    const changeColor = () => {
      if (window.scrollY >= 20) {
        setColorNav(true);
      } else {
        setColorNav(false);
      }
    };
  
    window.addEventListener("scroll", changeColor);
  
  return (
    <>
    <Navbar
      expand="md"
      fixed="top"
      className={colorNav ? "navbar navbar-bg" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/" className="tituloNav" >
          <span className='colorChangeBrand'>&lt;/</span> martina soria lanzi<span className='colorChangeBrand'>&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto"></Nav>
          <Nav className="">
            <Nav.Link className='linksNav' href="#about">About</Nav.Link>
            <Nav.Link className='linksNav' href="#skills">Skills</Nav.Link>
            <Nav.Link className='linksNav' href="#projects">Projects</Nav.Link>
            <Nav.Link className='linksNav' href="#contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navegador