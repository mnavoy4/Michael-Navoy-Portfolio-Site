import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Michael Navoy</h1>
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
                <Link to='/about' className='nav-link'>About Me</Link>
              </li>
              <li className='nav-item'>
                <Link to='/work' className='nav-link'>My Work</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='main'>
          <div className='content'>
            
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
