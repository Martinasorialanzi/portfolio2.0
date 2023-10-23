import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Rutas } from './components/rutas/Rutas'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <p>footer</p>
    </>
  )
}

export default App
