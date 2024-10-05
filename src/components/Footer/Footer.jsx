import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
// import { SiCodingninjas } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Himanshu's Portfolio </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      
      <div className="footer__socials">
        <a href="https://github.com/i-himanshu29"><FaGithub /></a>
        <a href="https://x.com/ihimanshu29"><FaSquareXTwitter /></a>
        <a href="https://www.linkedin.com/in/ihimanshu29/"><ImLinkedin2 /></a>
        
        <a href="https://www.instagram.com/ihimanshu.29/"><FaInstagram /></a>
        <a href="https://leetcode.com/u/Himanshu_Maurya/"><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/user/himanshu_29/"><SiGeeksforgeeks /></a>
        {/* <a href="https://www.naukri.com/code360/profile/ihimanshu29"><SiCodingninjas /></a> */}

      </div>

      <div className="footer__copyright">
        <small>&copy; All rights are reserved</small>
      </div>
    </footer>
  )
}

export default Footer
