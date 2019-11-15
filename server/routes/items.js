const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

const Items = require('../models/items.js');

const validateEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

router.get('/', (req, res) => {
  const query = { ...req.query };
  Items.find()
    .sort(query)
    .then(data => {
      res.json(data);
    })
    .catch(error => res.send(error))
})

router.post('/', (req, res) => {
  const query = { ...req.body };
  if(!query.name || !query.email || !query.desc) return res.status(500).send('Please fill all fields');
  if(!validateEmail(query.email)) return res.status(500).send('Please type valid email');
  Items.create(query)
    .then(item => res.json(item))
    .catch(error => res.send(error));
})

router.put('/', auth, (req, res) => {
  const query = { ...req.body };
  Items.findOneAndUpdate({ _id: query._id }, { $set: query.args }, { new: true })
    .then(item => (res.json(item)))
    .catch(error => res.send(error))
})

module.exports = router;