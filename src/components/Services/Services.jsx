import React from 'react'
import "./Services.css"
import { BiCheck } from "react-icons/bi";



const Services = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container ">
        {/* <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> jgm kfooe kkgfe  goqkgg gorq</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> jgm kfooe kkgfe  goqkgg gorq</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> jgm kfooe kkgfe  goqkgg gorq</p>
            </li>

          </ul>
        </article> */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Full-stack Development</p>
            </li>
            
          </ul>
        </article>

        {/* <article className="service">
          <div className="service__head">
            <h3>Content Writing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> jgm kfooe kkgfe  goqkgg gorq</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> jgm kfooe kkgfe  goqkgg gorq</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> jgm kfooe kkgfe  goqkgg gorq</p>
            </li>
            
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services