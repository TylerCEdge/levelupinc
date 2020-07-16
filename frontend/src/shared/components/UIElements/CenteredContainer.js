import React from 'react';

import './CenteredContainer.css';

export default function CenteredContainer(props) {
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center'>
        <div className='col'>{props.children}</div>
      </div>
    </div>
  );
}
