import React from 'react'
import Particles from 'react-particles-js';

export default function AboutMe(){
  return (
    <section className='about-me' id='about'>
      <h2 className='section-title section-title-about'>Who I am</h2>
      <p className='section-subtitle section-subtitle-about'>
        Full stack developer based in Denver
      </p>
      <div className='about-me-body'>
        <Particles/>
        <p>
          I have a Bachelor’s Degree in Petroleum Engineering and I worked
          as a petroleum engineer for a little over
          2 years before making my career transition into software engineering. 
        </p>
        <p>
          I attended Flatiron School's Immersive Software Engineering program where I focused on Ruby on Rails and JavaScript.
          I have experience with React, React Navtive, NodeJS, Redux, MongoDB, SQLite3, and MySQL.
        </p>
        <p>
          I love getting outdoors as much as possible by snowboarding/skiing in the winter and hiking with my dog Zella in the summer.
        </p>
      </div>
      <img
        src={require('../assets/images/fishing-large.png')}
        alt='picture of Michael and a friend'
        className='about-me-image'
      />
    </section>
  )
}