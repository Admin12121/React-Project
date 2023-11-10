import React from "react";
import "./Hero.scss";
// import { CgChevronDoubleDownR } from "react-icons/cg";
import {animate, motion} from "framer-motion"


const textvariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },

    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    },
};

const sliderVariants ={
  initial:{
    x:0,
  },
  animate:{
    x:"-200%",
    transition:{
      repeat:Infinity,
      repeat:"mirror",
      duration:20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="sliderTextConatiner" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influncer
      </motion.div>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textvariants} initial="initial" animate="animate">
          <motion.h2 variants={textvariants}>Vicky</motion.h2>
          <motion.h1 variants={textvariants}>Full stack Web Developer</motion.h1>
          <motion.div variants={textvariants} className="buttons">
          <motion.button variants={textvariants}>See the latest Work</motion.button>
          <motion.button variants={textvariants}>Contact</motion.button>
          </motion.div>
          <motion.img src="./scroll.png" variants={textvariants} animate="scrollButton" />
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="./Admin.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
