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

  const new_pet = await prisma.pet.create({
    data: {
      name: req.body.name,
      user_pets: req.body.user_pets,
    }
  });

  const user_rel1 = await prisma.user_pet.create({
    data: {
      user_id: new_user1.id,
      pet_id: new_pet1.id
    }
  });

  // console.log('new_pet-----', new_pet);
  
  res.send('Pet created');

});

module.exports = router;