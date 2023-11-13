import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navegador from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import Home from './components/home/Home'
import Presentation from './components/presentation/Presentation'


function App() {

  return (
    <>
    <Outlet/>
    
  
    </>
  )
}

export default App
