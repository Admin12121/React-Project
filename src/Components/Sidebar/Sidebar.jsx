import React, { useState } from 'react'
import "./Sidebar.scss"
import Links from './Links/Links'
import ToggleButton from './ToggleButton/ToggleButton'
import {motion} from "framer-motion"

const Sidebar = () => {

    const [open , SetOpen] = useState(false)

    const variants ={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition : {
                type:"spring",
                stiffness: 20,
            }
        },
        close:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness: 200,
                damping: 40,
            },
        },
    };

  return (
    <motion.div className='sidebar' animate={open ? "open" : "close"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={SetOpen}/>
    </motion.div>
  )
}

export default Sidebar
