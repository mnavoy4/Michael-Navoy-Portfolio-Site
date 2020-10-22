import React from 'react'

export default function AboutMe(){
  return (
    <section className='about-me' id='about'>
      <h2 className='section-title section-title-about'>Who I am</h2>
      <p className='section-subtitle section-subtitle-about'>
        Full stack developer based in Denver
      </p>
      <div className='about-me-body'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum.
          Aliquam erat volutpat. Cras commodo tincidunt metus ac venenatis.
          Suspendisse finibus dapibus molestie.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin iaculis bibendum.
          Aliquam erat volutpat. Cras commodo tincidunt metus ac venenatis.
          Suspendisse finibus dapibus molestie.
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