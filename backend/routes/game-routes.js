const express = require('express');

const router = express.Router();

// TESTING ROUTES WITH FAKE DATA BEFORE WIRING IN IGDB API.
const DUMMY_GAMES = [
  {
    id: '1v229e',
    title: 'Halo',
    image:
      'https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/06/Halo_Infinite_TeaserArt_Vert_Final.jpg',
    description: 'A game you shoot aliens in.',
    user: 'u404',
  },
];

// GET GAMES BY ID
router.get('/:gid', (req, res, next) => {
  const gameId = req.params.gid;
  const game = DUMMY_GAMES.find((g) => {
    return g.id === gameId;
  });
  res.json({ game });
});

// *** GET GAMES ASSOCIATED WITH A USER ACCOUNT
// FOR USE LATER.  NOT INTENDED FOR FIRST LAUNCH. ***
router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;

  const game = DUMMY_GAMES.find((g) => {
    return g.user === userId;
  });

  res.json({ game });
});

module.exports = router;
