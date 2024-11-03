import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';

// Lazy load the components
const Ourservices = lazy(() => import('./components/ourservices/Ourservices.jsx'));
const AboutUs = lazy(() => import('./components/aboutUs/AboutUs.jsx'));
const Home = lazy(() => import('./components/home/Home.jsx'));

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Nav />

      {/* Suspense for lazy-loaded components with a fallback loader */}
      <Suspense
        fallback={
          <div className='flex items-center justify-center min-h-[70vh] text-red-700 font-edu text-3xl'>
            Loading...
          </div>
        }
      >
        {/* Routes for different paths */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/ourservices' element={<Ourservices />} />
        </Routes>
      </Suspense>

      {/* Footer placed at the bottom of the page */}
      <Footer />
    </>
  );
}

export default App;
