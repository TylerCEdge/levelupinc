import React from 'react';

import './Features.css';

import Overlay from '../../shared/components/UIElements/Overlay';
import CenteredContainer from '../../shared/components/UIElements/CenteredContainer';

export default function Features() {
  return (
    <React.Fragment>
      <Overlay>
        <CenteredContainer>Features</CenteredContainer>
      </Overlay>
    </React.Fragment>
  );
}
