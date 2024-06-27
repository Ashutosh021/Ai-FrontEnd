import React, { useState } from 'react'
import Navbar from './pages/components/Navbar'
import Home from './pages/components/Home'
import ImageGenrator from './pages/components/ImageGenrator'
import History from './pages/components/History'
import Contact from './pages/components/Contact'
import Pricing from './pages/components/Pricing'
import Login from './pages/components/Login'
import Signup from './pages/components/Signup'
import Error from './pages/components/Error'
import Footer from './pages/components/Footer'
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
          <Route path='/pricing' element=<Pricing /> ></Route>
          <Route path='*' element=<Error/> ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App