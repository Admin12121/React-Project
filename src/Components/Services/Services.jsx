import React, { useRef } from 'react'
import './Services.scss'
import {animate, motion, useInView} from "framer-motion";

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate: {
        x:0 ,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})


  return (
    <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer">
            <p>
                I focus on helping your brand grow
                <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Your</b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>loram
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi rerum eum sunt amet aperiam officia soluta perferendis autem explicabo quis minus dolore consequuntur tenetur consequatur, doloremque laborum nam aut.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>loram
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi rerum eum sunt amet aperiam officia soluta perferendis autem explicabo quis minus dolore consequuntur tenetur consequatur, doloremque laborum nam aut.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>loram
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi rerum eum sunt amet aperiam officia soluta perferendis autem explicabo quis minus dolore consequuntur tenetur consequatur, doloremque laborum nam aut.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>loram
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi rerum eum sunt amet aperiam officia soluta perferendis autem explicabo quis minus dolore consequuntur tenetur consequatur, doloremque laborum nam aut.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
