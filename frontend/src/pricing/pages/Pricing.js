import React from 'react';

import './Pricing.css';

import Overlay from '../../shared/components/UIElements/Overlay';
import CenteredContainer from '../../shared/components/UIElements/CenteredContainer';

export default function Pricing() {
  return (
    <React.Fragment>
      <Overlay>
        <CenteredContainer>Pricing</CenteredContainer>
      </Overlay>
    </React.Fragment>
  );
}
