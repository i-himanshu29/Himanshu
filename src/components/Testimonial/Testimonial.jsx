import React from 'react'
import "./Testimonial.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data =[
  {
    avator:AVTR1,
    name:'Aditya',
    review:'  The website is well-structured, showcasing a variety of web development projects that demonstrate a deep understanding of both front-end and back-end technologies.'
  },
  {
    avator:AVTR2,
    name:'Adi',
    review:'  I am blown away by the quality of content on Himanshu portfolio. Each piece is well-researched, engaging, and perfectly edited. The blog section is particularly impressive offering valuable insights and tips that are both practical and thought-provoking.'
  },
  {
    avator:AVTR3,
    name:'Adityaa',
    
    review:' I have had the pleasure of working with Himanshu on a few projects, and this portfolio perfectly captures the innovation and quality they bring to the table.'
  },
  {
    avator:AVTR4,
    name:'Aditi',
    review:'Reviewing Himanshu portfolio was a delightful experience. The attention to detail in the UI/UX design is exceptional. The layouts are clean, intuitive, and user-friendly.'
  },
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      
        pagination={{ clickable: true }}
      
      >
          {
            data.map(({avator,name,review},index)=>{
              return (
                <SwiperSlide key={index} className=" testimonial">
                    <div className="client__avator">
                      <img src={avator}  />
                    </div>

                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">
                      {review}
                    </small>
              </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default Testimonial
