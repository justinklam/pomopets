const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// read - grab pet data
router.get('/', function(req, res) {
  res.send({ title: 'pets' });
});

router.post('/', async function(req, res) {

  const new_pet = await prisma.timer.create({
    data: {
      user_pets: req.body.user_pets,
      description: req.body.description
    }
  });

  // console.log('new_pet-----', new_pet);
  
  res.send('Pet created');

});

module.exports = router;