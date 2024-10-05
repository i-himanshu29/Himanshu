import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>TailwindCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>


        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Postman</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>

        {/* //..................// */}

        <div className="experience__Fundamentals">
          <h3>Fundamentals</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>DBMS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Operating System</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>OOPS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Networking</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__other">
          <h3>Others</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Problem Solving</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Time Management</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Team Work</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Communication</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Leadership</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience