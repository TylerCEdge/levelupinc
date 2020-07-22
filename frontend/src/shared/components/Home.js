import React, { useState } from 'react';

import CenteredContainer from './UIElements/CenteredContainer';
import Overlay from './UIElements/Overlay';

import Button from './UIElements/Button';
import Input from './UIElements/Input';

export default function Home(props) {
  const [name, setName] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    console.log(`Searching for:... ${name}.`);
  }
  return (
    <React.Fragment>
      <Overlay>
        <CenteredContainer>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              placeholder='Search for a game...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input type='submit' className='btn' value='Submit' />
          </form>
        </CenteredContainer>
      </Overlay>
    </React.Fragment>
  );
}
