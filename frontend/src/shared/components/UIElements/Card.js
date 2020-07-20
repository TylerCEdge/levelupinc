import React from 'react';

import './Card.css';

import Button from './Button';

export default function Card(props) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img
        className='card-img'
        src='https://gizmoblaze.com/wp-content/uploads/2020/05/gears-of-war-6-release-date-1280x720-1-150x150.jpeg'
        alt='Yo momma'
      />
      <div className='card-body'>
        <h5 className='card-title'>
          Blurb here. Something about the game. Something something. Cows.
        </h5>
        <p className='card-text'>{props.description}</p>
        <Button type='Submit' className='btn' onClick={props.handler}>
          Save
        </Button>
      </div>
    </div>
  );
}
