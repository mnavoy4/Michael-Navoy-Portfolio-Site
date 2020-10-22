import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
  return(
    <footer className='footer'>
      <a href='mailto:mnavoy4@gmail.com' className='footer-link'>mnavoy4@gmail.com</a>
      <ul className='social-list'>
        <li className='social-list-item'>
          <a href='https://github.com/mnavoy4' target='_blank' className='social-list-link'><FontAwesomeIcon icon={faGithub}/></a>
        </li>
        <li className='social-list-item'>
          <a href='https://www.linkedin.com/in/michael-navoy/' target='_blank' className='social-list-link'><FontAwesomeIcon icon={faLinkedin}/></a>
        </li>
        <li className='social-list-item'>
          <a href='https://medium.com/@mnavoy4' target='_blank' className='social-list-link'><FontAwesomeIcon icon={faMedium}/></a>
        </li>
      </ul>
    </footer>
  )
  
}