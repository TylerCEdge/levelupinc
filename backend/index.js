const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const logger = require('morgan');

const gameRoutes = require('./routes/game-routes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is starting at Port: ${PORT}`);
});
