import React from 'react';

export default function Introduction() {
  return (
    <section className='intro' id='home'>
      <h1 className='section-title section-title-intro'>
        Hi, I am <strong>Michael Navoy</strong>
      </h1>
      <p className='section-subtitle-intro'>full stack dev</p>
      <img
        src={require('../assets/images/headshot.png')}
        alt='a picture of Michael Navoy smiling'
        className='intro-image'
      />
    </section>
  )
};