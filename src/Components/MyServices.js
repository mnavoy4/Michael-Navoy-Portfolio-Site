import React from 'react'
import { Link } from 'react-router-dom'

export default function MyServices(){
  return (
    <section className='my-services' id='services'>
      <h2 className='section-title section-title-services'>What I do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Full Stack Development</h3>
          <p>
            Recently graduated from Flatiron School, where I focused on full-stack web and mobile app development.
            Focusing on elegant UX/UI and RESTful API's, I built a ridesharing app for trips to the mountains as my Capstone project at Flatiron. 
          </p>
        </div>
        <div className='service'>
          <h3>Design</h3>
          <p>
            While I tend to focus on the logical operations of app delevopment, the importance of refined + sophisticated design can not be understated.
            
          </p>
        </div>
        <div className='service'>
          <h3>Something else</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum. Aliquam erat volutpat.
            Cras commodo tincidunt metus ac venenatis. Suspendisse finibus dapibus molestie. Donec consectetur accumsan scelerisque.
            Donec tincidunt varius finibus. Nulla facilisi.
          </p>
        </div>
      </div>
      <Link to='/work' className='button'>My Work</Link>
    </section>
  )
}