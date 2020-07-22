import React from 'react';

import './Games.css';

import Overlay from '../../shared/components/UIElements/Overlay';
import CenteredContainer from '../../shared/components/UIElements/CenteredContainer';

import Gamelist from '../components/Gamelist';

export default function Games() {
  const DUMMY_GAMES = [
    {
      id: 'u1',
      title: 'Gears of War',
      image:
        'https://gizmoblaze.com/wp-content/uploads/2020/05/gears-of-war-6-release-date-1280x720-1-150x150.jpeg',
      description: 'Something here',
    },
    {
      id: 'u2',
      title: 'Gears of War 2',
      image:
        'https://gizmoblaze.com/wp-content/uploads/2020/05/gears-of-war-6-release-date-1280x720-1-150x150.jpeg',
      description: 'Something here',
    },
    {
      id: 'u3',
      title: 'Gears of War',
      image:
        'https://gizmoblaze.com/wp-content/uploads/2020/05/gears-of-war-6-release-date-1280x720-1-150x150.jpeg',
      description: 'Something here',
    },
    {
      id: 'u4',
      title: 'Gears of War 2',
      image:
        'https://gizmoblaze.com/wp-content/uploads/2020/05/gears-of-war-6-release-date-1280x720-1-150x150.jpeg',
      description: 'Something here',
    },
    {
      id: 'u5',
      title: 'Gears of War',
      image:
        'https://gizmoblaze.com/wp-content/uploads/2020/05/gears-of-war-6-release-date-1280x720-1-150x150.jpeg',
      description: 'Something here',
    },
    {
      id: 'u6',
      title: 'Gears of War 2',
      image:
        'https://gizmoblaze.com/wp-content/uploads/2020/05/gears-of-war-6-release-date-1280x720-1-150x150.jpeg',
      description: 'Something here',
    },
  ];

  return (
    <Overlay>
      <CenteredContainer>
        <Gamelist games={DUMMY_GAMES} />
      </CenteredContainer>
    </Overlay>
  );
}
