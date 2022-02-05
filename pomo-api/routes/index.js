const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {

  // Test - Find Users
  // const findUsers = User.findAll();
  // findUsers.then(result => {
  //   console.log('RESULT', result)
  // })
  
  // console.log("USERS", findUsers);
  
  res.send({ title: 'Express' });
});

module.exports = router;
