const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const logger = require('morgan');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('api/games', gamesRoutes);
app.use('api/users', userRoutes);

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, () => {
      return next(error);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Something went wrong... ='(" });
});

app.listen(PORT, () => {
  console.log(`Server is starting at Port: ${PORT}`);
});
