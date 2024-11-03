import React from 'react'
import Header from '../../components/header/Header'
import AboutUs from '../../components/aboutUs/AboutUs'
import Ourservices from '../../components/ourservices/Ourservices'
import Testimonial from '../../components/Testimonial/Testimonial'
import Question from '../../components/question/Question'
import Introducing from '../../components/introducing/Introducing'



const Home = () => {
  return (
    <>
    <Header />
    <AboutUs />
      <Ourservices />
      <Testimonial />
      <Question />
      <Introducing />
    
    </>
  )
}

export default Home