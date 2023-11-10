import React from 'react'
import {FaFacebookF, FaYoutube, FaDribbble} from "react-icons/fa"
import {BiLogoInstagramAlt} from "react-icons/bi"
import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:0.5}}>Vicky Dev</motion.span>
                <div className="social">
                    <motion.a href="" initial={{opacity:0, scale: 0.5  }} animate={{opacity:1, scale:1,}} transition={{type:"spring"}}><FaFacebookF className='img' /></motion.a>
                    <motion.a href="" initial={{opacity:0, scale: 0.5  }} animate={{opacity:1, scale:1,}} transition={{type:"spring"}}><FaYoutube className='img' /></motion.a>
                    <motion.a href="" initial={{opacity:0, scale: 0.5  }} animate={{opacity:1, scale:1,}} transition={{type:"spring"}}><BiLogoInstagramAlt className='img' /></motion.a>
                    <motion.a href="" initial={{opacity:0, scale: 0.5  }} animate={{opacity:1, scale:1,}} transition={{type:"spring"}}><FaDribbble className='img' /></motion.a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
