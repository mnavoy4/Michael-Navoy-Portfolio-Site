import React from 'react'
import { Link } from 'react-router-dom'

export default function MyServices(){
  return (
    <section>
      <h2 className='section-title section-title-services'>What I do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Full Stack Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum. Aliquam erat volutpat.
            Cras commodo tincidunt metus ac venenatis. Suspendisse finibus dapibus molestie. Donec consectetur accumsan scelerisque. Donec tincidunt varius finibus. Nam eleifend accumsan aliquet. Vestibulum sollicitudin ex id accumsan gravida. Nulla facilisi.
            Suspendisse a tincidunt dolor. Ut lobortis vel quam at convallis. Nam orci nibh, molestie id.
          </p>
        </div>
        <div className='service'>
          <h3>Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum. Aliquam erat volutpat.
            Cras commodo tincidunt metus ac venenatis. Suspendisse finibus dapibus molestie. Donec consectetur accumsan scelerisque. Donec tincidunt varius finibus. Nam eleifend accumsan aliquet. Vestibulum sollicitudin ex id accumsan gravida. Nulla facilisi.
            Suspendisse a tincidunt dolor. Ut lobortis vel quam at convallis. Nam orci nibh, molestie id.
          </p>
        </div>
        <div className='service'>
          <h3>Something else</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum. Aliquam erat volutpat.
            Cras commodo tincidunt metus ac venenatis. Suspendisse finibus dapibus molestie. Donec consectetur accumsan scelerisque. Donec tincidunt varius finibus. Nam eleifend accumsan aliquet. Vestibulum sollicitudin ex id accumsan gravida. Nulla facilisi.
            Suspendisse a tincidunt dolor. Ut lobortis vel quam at convallis. Nam orci nibh, molestie id.
          </p>
        </div>
      </div>
      <Link to='/work' className='button'>My Work</Link>
    </section>
  )
}