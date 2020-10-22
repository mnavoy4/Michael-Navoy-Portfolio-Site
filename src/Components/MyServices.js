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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum. Aliquam erat volutpat.
            Cras commodo tincidunt metus ac venenatis. Suspendisse finibus dapibus molestie. Donec consectetur accumsan scelerisque.
            Donec tincidunt varius finibus. Nulla facilisi.
          </p>
        </div>
        <div className='service'>
          <h3>Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum. Aliquam erat volutpat.
            Cras commodo tincidunt metus ac venenatis. Suspendisse finibus dapibus molestie. Donec consectetur accumsan scelerisque.
            Donec tincidunt varius finibus. Nulla facilisi.
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