const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function(req, res) {
  res.render('timer');
});

router.post('/', async function(req, res) {
  // console.log('user.id----', User.id);

  // const new_timer = await Timer.create({
  //   UserId: 1,
  //   description: 'Example',
  //   is_active: true
  // });

  // console.log('new_timer-----', new_timer)
  
  res.send('Timer created');
});

module.exports = router;