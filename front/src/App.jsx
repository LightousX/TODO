import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import Login from './pages/login'
import NoMatch from './pages/nomatch';
import Home from './pages/home'
// import './pages/home2.css'

import Signup from './pages/signup'
import Main from './pages/mainn';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'


function App() {

  return (

    <>
  <Router>
    <Routes>
      <Route path="*" element={<NoMatch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/enterance" element={<Home/>}/>
        <Route path="/" element={<Main/>} />
        <Route path="/signup" element={<Signup/>} />

    </Routes>

  </Router>
    </>
  )
}

export default App
