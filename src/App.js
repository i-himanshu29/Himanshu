import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Experience from './components/Experience/Experience.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
// import Testimonial  from './components/Testimonial/Testimonial.jsx'
function App() {
  return (
   <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
   </>
  );
}

export default App;
