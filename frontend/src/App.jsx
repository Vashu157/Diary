import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import AddDiary from './pages/addDiary/AddDiary'

function App() {

  return (
    <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addDiary'element = {<AddDiary/>}/>
          </Routes>
    </>

  )
}

export default App
