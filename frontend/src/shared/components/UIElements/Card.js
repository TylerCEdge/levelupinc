import React from 'react';

import './Card.css';

import Button from './Button';

export default function Card(props) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img
        className='card-img-top'
        src='https://via.placeholder.com/150/'
        alt='Yo momma'
      />
      <div className='card-body'>
        <h5 className='card-title'>Blurb here</h5>
        <p className='card-text'>{props.description}</p>
        <Button type='Submit' className='btn' onClick='submit'>
          Save
        </Button>
      </div>
    </div>
  );
}
