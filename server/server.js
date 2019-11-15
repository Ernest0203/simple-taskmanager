const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require('config');

const db = config.get('mongoURI');
const items = require('./routes/items');
const users = require('./routes/users');

const app = express(); 

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.json());

app.use('/items', items);
app.use('/users', users);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve()(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server started on port ${port}...`));

