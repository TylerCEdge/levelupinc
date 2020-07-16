import React from 'react';

import Navbar from '../../shared/components/Navigation/Navbar';

import CenteredContainer from '../../shared/components/UIElements/CenteredContainer';
import Overlay from '../../shared/components/UIElements/Overlay';

import Button from '../../shared/components/UIElements/Button';
import Input from '../../shared/components/UIElements/Input';

export default function Users() {
  return (
    <React.Fragment>
      <Navbar />
      <Overlay>
        <CenteredContainer>
          <Input />
          <Button>Search</Button>
        </CenteredContainer>
      </Overlay>
    </React.Fragment>
  );
}
