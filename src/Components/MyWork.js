import React from 'react';
import { Link } from 'react-router-dom';

export default function MyWork(){
  return (
    <section className='my-work' id='work'>
      <h2 className='section-title section-title-work'>My Work</h2>
      <p className='section-subtitle section-subtitle-work'>
        A selection of my range of work
      </p>
      <div className='portfolio'>
        <a href='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </a>
        <a href='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </a>
        <a href='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </a>
        <a href='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </a>
        <a href='https://google.com' className='portfolio-item'>
          <img src={require('../assets/images/fishing.png')} alt='pic' className='portfolio-image'/>
        </a>
      </div>
    </section>
  )
}