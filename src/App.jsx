import React, { useState } from 'react'
import Navbar from './pages/common/Navbar'
import Home from './pages/Home'
import ImageGenrator from './pages/ImageGenrator'
import History from './pages/History'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error from './pages/Error'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './app.css'
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element=<Home />></Route>
          <Route path='/signup' element=<Signup />></Route>
          <Route path='/login' element=<Login />></Route>
          <Route path='/image-generator' element=<ImageGenrator /> ></Route>
          <Route path='/history' element=<History/> ></Route>
          <Route path='/contact' element=<Contact/> ></Route>
          <Route path='/about' element=<About /> ></Route>
          <Route path='*' element=<Error/> ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App