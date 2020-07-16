import React from 'react';

import './Games.css';

import Overlay from '../../shared/components/UIElements/Overlay';
import CenteredContainer from '../../shared/components/UIElements/CenteredContainer';

export default function Games() {
  return (
    <React.Fragment>
      <Overlay>
        <CenteredContainer>Games</CenteredContainer>
      </Overlay>
    </React.Fragment>
  );
}
