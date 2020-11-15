import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import IntroductionContainer from './Containers/IntroductionContainer';
import AboutMe from './Components/AboutMe';
import MyWork from './Components/MyWork';
import Footer from './Components/Footer';
import Particles from 'react-particles-js';

function App(){

  const [navOpen, setNavOpen] = useState(false);

  return(
    <BrowserRouter>
      <div className="App">
        <header>
          <div className='logo'>
            <img src={require('./assets/images/logo.png')} alt=''/>
          </div>
          <button onClick={() => setNavOpen(!navOpen)} className='nav-toggle'>
            <span className='hamburger'></span>
          </button>
          {
            navOpen ? 
              <nav className='nav-open nav'>
                <ul className='nav-list'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/about' className='nav-link'>About Me</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/services' className='nav-link'>My Services</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/work' className='nav-link'>My Work</Link>
                  </li>
                </ul>
              </nav>
            :
              <nav className='nav'>
                <ul className='nav-list'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/about' className='nav-link'>About Me</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/services' className='nav-link'>My Services</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/work' className='nav-link'>My Work</Link>
                  </li>
                </ul>
              </nav>
          }
        </header>
        <main className='main'>
          <div className='content'>
            <IntroductionContainer/>
            <AboutMe/>
            <MyWork/>
            <Footer/>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
