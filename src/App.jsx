import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navegador from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import Home from './components/home/Home'
import Presentation from './components/presentation/Presentation'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion, useScroll } from "framer-motion";
import "./App.css"

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
    <Outlet/>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}

export default App
