import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/studynotion.png";
import IMG2 from "../../assets/Tomato.png";
import IMG3 from "../../assets/weather.png";
import IMG4 from "../../assets/Shopper.png";
import IMG5 from "../../assets/password.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data =[
  {
    id:1,
    image:IMG1,
    title:'StudyNotion',
    github:'https://github.com/i-himanshu29/studynotion',
    demo:'https://studynotion-plum-nine.vercel.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'Tomato.',
    github:'https://github.com/i-himanshu29/Food-Delivery-Website',
    demo:'https://food-delivery-frontend-ok8k.onrender.com/#app-download'
  },
  {
    id:3,
    image:IMG3,
    title:'Weather App',
    github:'https://github.com/i-himanshu29/WeatherApp',
    demo:'https://weather-j8se5mb1g-himanshu-mauryas-projects-849e24c1.vercel.app/'
  },
  {
    id:4,
    image:IMG4,
    title:'Shopper',
    github:'https://github.com/i-himanshu29/Shopper',
    demo:'https://shopper-frontend-855s.onrender.com/'
  },
  {
    id:5,
    image:IMG5,
    title:'Password Generator',
    github:'https://github.com/i-himanshu29/PasswordGenerator',
    demo:'https://password-generator-o2n84yep7-himanshu-mauryas-projects-849e24c1.vercel.app/'
  },
  // {
  //   id:6,
  //   image:IMG6,
  //   title:'Crypto currency Dashboard & Financial Visualization',
  //   github:'https://github.com',
  //   demo:'https://dribbble.com/shots/24271080-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="title"/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn">Github</a>
                    <a href={demo} target='_blank' className="btn btn-primary">Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
        
     
    </section>
  )
}

export default Portfolio