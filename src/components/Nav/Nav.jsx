import React from 'react'
import "./Nav.css"
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { VscProject } from "react-icons/vsc";
import { RiServiceLine } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";
import {useState} from "react";

const Nav = () => {

  const [activeNav, setActiveNav]=useState('#');

  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser /></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''}><VscProject /></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav === '#service' ? 'active':''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><RiMessage2Line /></a>
    </nav>
  )
}

export default Nav