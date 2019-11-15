const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.js');

const Users = require('../models/users.js');

router.post('/', (req, res) => {
  const query = { ...req.body };
  if(!query.login || !query.password) return res.status(500).send('Please fill all fields');
  Users.findOne(query)
    .select('-password')
    .then(user => {
      if(!user) return res.status(500).send('User not found');
      jwt.sign(
        { id: user._id },
        config.get('jwtSecret'),
        { expiresIn: 86400 },
        (error, token) => {
          if(error) throw error; 
          res.json({token, user});
        }
      )
    })
    .catch(error => res.send(error));
});

router.get('/', auth, (req, res) => {
  Users.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = router;