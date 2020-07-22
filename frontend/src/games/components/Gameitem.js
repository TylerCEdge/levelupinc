import React from 'react';

import './Gameitem.css';

import Button from '../../shared/components/UIElements/Button';

export default function Gameitem(props) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img className='card-img' src={props.image} alt={props.title} />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
        <Button type='Submit' className='btn'>
          Save
        </Button>
      </div>
    </div>
  );
}
