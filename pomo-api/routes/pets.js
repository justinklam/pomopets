const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function (req, res) {

  // console.log('pets-get req-----', req.query);

  // axios is using a get request with params, return for it is req.query as a result
  const findAllUserPets = await prisma.user_pet.findMany({
    where: {
      user_id: parseInt(req.query.id)
    },
    include: {
      pet: true
    },
  });

  // const findAllPets = await prisma.pet.findMany({
  //   where: {
  //     id: req.body.id
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //     stage: true,
  //     type: true
  //   }
  // });

  // const pet = await prisma.pet.findUnique({
  //   where: {
  //     id: 2
  //   },
  //   select: {
  //     email: true,
  //     username: true
  //   }
  // });
  
  res.send(findAllUserPets);
});

router.post('/', async function(req, res) {

  // console.log('pets post body-----', req.body)

  const new_pet = await prisma.pet.create({
    data: {
      name: req.body.name,
      type: req.body.type
    }
  });

  const user_relation = await prisma.user_pet.create({
    data: {
      // session check for userId
      user_id: req.body.userId,
      pet_id: new_pet.id
    }
  });

  // console.log('new_pet-----', new_pet);
  
  res.send('Pet created');

});

router.post('/update', async function(req, res) {

  const findAllUserPets = await prisma.user_pet.findMany({
    where: {
      user_id: req.body.userId
    },
    include: {
      pet: true
    },
  });

  // console.log('findAllUserPets-----', findAllUserPets)

  // console.log('pets post update req.body-----', req.body.userId)
  
  
  if (findAllUserPets.length > 0) {
    for (const pet of findAllUserPets) {
      // console.log('pets post update pet.pet-----', pet.pet)
       await prisma.pet.updateMany({
        where: {
          id: pet.pet.id
        },
        data: {
          stage: parseInt(pet.pet.stage)+1
        }
      });
    }
  }
  
  res.send('Pet updated');

});

module.exports = router;