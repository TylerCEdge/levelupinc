import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <button className='navbar-brand btn' href='/'>
        <h4>⁜ Level Up Inc. ⁜</h4>
      </button>
      <button
        className='navbar-toggler btn'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='#navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/games'>
              Games
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/features'>
              Features
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/pricing'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='/'>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
