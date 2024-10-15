import React from "react";

import Ourservices from "./components/ourservices/Ourservices.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Introducing from "./components/introducing/Introducing.jsx";
import Question from "./components/question/Question.jsx";

import "./App.css";

import Nav from "./components/nav/Nav.jsx";
import Header from './components/header/Header.jsx'

function App() {
  return (
    <>
      <Nav />
      <Header/>
      <AboutUs />
      <Ourservices />
      <Testimonial />
      <Question />

      <Introducing />

      <Footer />
    </>
  );
}

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs.jsx";

export default App;
