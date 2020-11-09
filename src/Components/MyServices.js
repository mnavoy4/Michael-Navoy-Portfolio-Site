import React from 'react'
import { Link } from 'react-router-dom'

export default function MyServices(){
  return (
    <section className='my-services' id='services'>
      <h2 className='section-title section-title-services'>What I do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Front-end Development</h3>
          <p>
            Creating user friendly web and mobile apps by combing the art of design with the functionality and logic of programming.
            So far, I have used Vanilla JS, React, and React Native to build responsive applications but am about to take the deep dive into Angular as I seek to expand my tech stack expertise.
          </p>
        </div>
        <div className='service'>
          <h3>Back End Development</h3>
          <p>
            Back end statement
            RESTful API development
          </p>
        </div>
        <div className='service'>
          <h3>Design</h3>
          <p>
            While performance and memory management of apps are hugely important in app development,
            the necessity of sophisticated, yet simple design can not be understated.
            I gravitate toward minimalist design and color schemes while maintaining brand consistency.
          </p>
        </div>
      </div>
      <Link to='/work' className='button'>My Work</Link>
    </section>
  )
}