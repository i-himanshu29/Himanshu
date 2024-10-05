import React, { useRef } from 'react';
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send form using emailjs
    emailjs
      .sendForm('service_ok93k03', 'template_5dgfd98', form.current, 'wVJntfGFjjvKkaspx')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hey.29.himanshu@gmail.com</h5>
            <a href="mailto:its.29himanshu@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <CiLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href="https://www.linkedin.com/in/ihimanshu29/">Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>phone no.</h5>
            <a href="https://api.whatsapp.com/send?phone=+919792903111">Send a message</a>
          </article>
        </div>

        {/* Form for sending messages */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
