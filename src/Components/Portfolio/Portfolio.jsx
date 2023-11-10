import { useRef } from "react";
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://i.pinimg.com/564x/69/f8/71/69f87110026f42f164d30a1962ccd8c1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt quae minus ipsam perferendis illo dolores voluptates officia tenetur! Architecto deserunt delectus veritatis veniam minus, rerum exercitationem accusamus quas quam.",
  },
  {
    id: 2,
    title: "Next Portfolio",
    img: "https://i.pinimg.com/736x/14/c9/ba/14c9ba29f5d27da98cdcd12edba318cb.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt quae minus ipsam perferendis illo dolores voluptates officia tenetur! Architecto deserunt delectus veritatis veniam minus, rerum exercitationem accusamus quas quam.",
  },
  {
    id: 3,
    title: "Node Blog",
    img: "https://i.pinimg.com/564x/fe/b4/ce/feb4ce2222d8dae63dd3d3605b9f0089.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt quae minus ipsam perferendis illo dolores voluptates officia tenetur! Architecto deserunt delectus veritatis veniam minus, rerum exercitationem accusamus quas quam.",
  },
  {
    id: 4,
    title: "Vues Animation",
    img: "https://i.pinimg.com/564x/fe/b4/ce/feb4ce2222d8dae63dd3d3605b9f0089.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt quae minus ipsam perferendis illo dolores voluptates officia tenetur! Architecto deserunt delectus veritatis veniam minus, rerum exercitationem accusamus quas quam.",
  },
];

const Single = ({ items }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, 
    // offset:["start start" , "end start"] 
});

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
            <div className="imgConatiner" ref={ref}>
          <img src={items.img} alt="" />
            </div>
          <motion.div  className="textcontainer" style={{ y }}>
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
      <div className="portfolio" ref={ref}>
        <div className="progess">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progessBar"></motion.div>
        </div>
        {items.map((items) => (
          <Single items={items} key={items.id} />
        ))}
      </div>
  );
};

export default Portfolio;
