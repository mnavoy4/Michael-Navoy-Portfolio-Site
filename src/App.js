import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import IntroductionContainer from './Containers/IntroductionContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className='logo'>
            <img src={require('./assets/images/headshot.png')} alt=''/>
          </div>
          <button className='nav-toggle' aria-label='toggle navigation'>
            <span className='hamburger'></span>
          </button>
          <nav className='nav'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>About Me</Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>My Services</Link>
              </li>
              <li className='nav-item'>
                <Link to='/work' className='nav-link'>My Work</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='main'>
          <div className='content'>
            <IntroductionContainer/>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
