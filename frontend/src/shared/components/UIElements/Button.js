import React from 'react';

export default function Button(props) {
  return (
    <button className='btn btn-outline-danger' type='submit'>
      {props.children}
    </button>
  );
}
