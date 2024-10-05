import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// import "./Header.css"

const HeaderSocial = () => {
  return (
    <div className="header__socials">
     {/* a flex-col items-center gap-2 left-0 bottom-12 absolute */}
        <a className="w-62 h-62" href="https://www.linkedin.com/in/ihimanshu29/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/i-himanshu29" target="_blank"><FaGithub /></a>
        <a href="https://x.com/ihimanshu29" target="_blank"><FaSquareXTwitter /></a>
        <a href="https://www.instagram.com/ihimanshu.29/" target="_blank"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocial