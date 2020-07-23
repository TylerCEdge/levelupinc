import React, { useState } from 'react';

import CenteredContainer from '../../shared/components/UIElements/CenteredContainer';
import Overlay from '../../shared/components/UIElements/Overlay';

import Button from '../../shared/components/UIElements/Button';
import Input from '../../shared/components/FormElements/Input';

export default function Home(props) {
  const [name, setName] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    alert(`Searching for:... ${name}.`);
    setName('');
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
