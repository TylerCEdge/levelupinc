import React from 'react';

import CenteredContainer from './UIElements/CenteredContainer';
import Overlay from './UIElements/Overlay';

import Button from './UIElements/Button';
import Input from './UIElements/Input';

export default function Home() {
  return (
    <React.Fragment>
      <Overlay>
        <CenteredContainer>
          <Input placeholder='Search for a game...' />
          <Button className='btn' type='submit'>
            Search
          </Button>
        </CenteredContainer>
      </Overlay>
    </React.Fragment>
  );
}
