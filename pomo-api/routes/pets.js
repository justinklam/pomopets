const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function (req, res) {

  const pet = await prisma.pet.findMany({
    where: {
      id: 2
      // id: req.body.id
    },
    select: {
      name: true,
      description: true
    }
  });

  // const pet = await prisma.pet.findUnique({
  //   where: {
  //     id: 2
  //   },
  //   select: {
  //     email: true,
  //     username: true
  //   }
  // });
  
  // console.log ('pet', pet)
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