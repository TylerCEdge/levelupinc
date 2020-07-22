import React from 'react';

import Gameitem from './Gameitem';

export default function Gamelist(props) {
  if (props.games.length === 0) {
    return <h2>Nothing here ='(</h2>;
  }
  return (
    <ul className='card-group'>
      {props.games.map((game) => {
        return (
          <Gameitem
            key={game.id}
            id={game.id}
            image={game.image}
            title={game.title}
            description={game.description}
          />
        );
      })}
    </ul>
  );
}
