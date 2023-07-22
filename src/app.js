import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Events from './components/events/events'
import Menu from './components/menu/menu'
import Eventbook from './components/eventbook/eventbook'
import Contact from './components/contact/contact'
import Booking from "./components/booking/booking"
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={<Booking />} /> 
        <Route path='/eventbook' element={<Eventbook />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
