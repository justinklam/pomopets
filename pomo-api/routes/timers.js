const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

router.get('/', function(req, res, next) {
  
  res.send({ title: 'timer' });
});

module.exports = router;