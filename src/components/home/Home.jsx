import React from 'react'
import "../home/home.css"
import Presentation from '../presentation/Presentation'
import Navegador from '../navbar/Navbar'
import About from '../about/About'
import  Skills  from '../skills/Skills'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'


const Home = () => {
  return (
    <>
    <Navegador/>

  <Presentation/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
    </>
  )
}

export default Home