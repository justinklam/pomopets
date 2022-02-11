const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1> Hello World! This is the Express Backend for PomoPets </h1>");
});

module.exports = router;

  // Test - Find Users
  // const findUsers = User.findAll();
  // findUsers.then(result => {
  //   console.log('RESULT', result)
  // })
  
  // console.log("USERS", findUsers);