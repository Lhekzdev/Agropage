
import React from 'react'




import './App.css'
import AboutUs from './components/about/AboutUs.jsx'
import Question from './components/question/Question.jsx'

import Ourservices from './components/ourservices/Ourservices.jsx'
import Footer from './components/ourservices/Footer/Footer.jsx'
import Testimonial from './components/ourservices/Testimonial/Testimonial.jsx'
import  Introducing from './components/introducing/Introducing.jsx'

import Nav from './components/nav/Nav.jsx'

function App() {
  return (

    <>
    <Nav/>
    <Ourservices/>
    <AboutUs/>
    <Question/>
      <Introducing />
      <Testimonial />
      <Footer />
      </>
  )

     
      
    


}




  


export default App
