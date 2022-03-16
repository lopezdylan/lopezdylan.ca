import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

// Scale properties
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div id='home' className="app__header app__flex">
    {/* Animation properties
    Motion from left to right
    Change opacity not visible to visible */}
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          {/* Icon to accompany intro text */}
          <span>👋</span>
          {/* Introduction text on home page */}
          <div style={{ marginLeft: 20 }}>
            <h1 className="head-text">
              Hi, I am <span className='about__name'>Dylan Lopez</span>
            </h1>
          </div>
        </div>

        {/* Personal traits */}
        <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    {/* Delay the display of children elements */}
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* Personal photo */}
      {/* <img src={images.profile} alt="profile_pic_bg" /> */}
      {/* Animating background behind profile image*/}
      {/* <motion.div
        whileInView={{ scale: [0, 1] }}     
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="overlay_circle"
      > */}
      <div className="about center" >
          <h1 className="head-text">
            Hi, I am <span className='about__name'>Dylan Lopez</span>
          </h1>
          <p>
            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
          </p>
        </div>
      {/* </motion.div> */}
    </motion.div>

    <motion.div 
  
      variants={scaleVariants} // Scale different elements
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.python, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg_circle" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');