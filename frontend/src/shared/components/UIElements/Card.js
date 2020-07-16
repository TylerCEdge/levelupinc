import React from 'react';

export default function Card(props) {
  return (
    <div className='card' style='width: 18rem;'>
      <img className='card-img-top' src={props.image} alt={props.title} />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>{props.description}</p>
        <a href='/' className='btn'>
          Save
        </a>
      </div>
    </div>
  );
}
