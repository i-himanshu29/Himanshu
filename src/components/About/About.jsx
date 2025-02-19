import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='About Image'/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>0.5+ years experience</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>0+ Worldwide</small>
          </article>

          <article className="about__card">
            <VscFolderOpened className="about__icon"/>
            <h5>Projects</h5>
            <small>5+ projects completed</small>
          </article>
        </div>
        
        <p>
        Hi, I'm Himanshu Maurya, a Software Developer who loves building new and 
        efficient software. With a strong background in computer science and a lot
         of experience in different programming languages and technologies,
          I aim to create applications that not only work well but also impress users.
        </p>

        <a href='#contact' className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
