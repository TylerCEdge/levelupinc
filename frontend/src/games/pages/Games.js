import React from 'react';

import './Games.css';

import Overlay from '../../shared/components/UIElements/Overlay';
import CenteredContainer from '../../shared/components/UIElements/CenteredContainer';

import Card from '../../shared/components/UIElements/Card';

export default function Games() {
  return (
    <Overlay>
      <CenteredContainer>
        <Card />
      </CenteredContainer>
    </Overlay>
  );
}
