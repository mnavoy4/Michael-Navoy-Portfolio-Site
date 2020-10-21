import React from 'react';
import { Link } from 'react-router-dom';

export default function MyWork(){
  return (
    <section className='my-work' id='work'>
      <h2 className='section-title'></h2>
      <p className='section-subtitle'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam sollicitudin iaculis bibendum. Aliquam erat volutpat. Cras commodo tincidunt metus ac venenatis.
        Suspendisse finibus dapibus molestie. Donec consectetur accumsan scelerisque.
      </p>
      <div className='portfolio'>
        <Link to='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </Link>
        <Link to='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </Link>
        <Link to='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </Link>
        <Link to='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </Link>
      </div>
    </section>
  )
}