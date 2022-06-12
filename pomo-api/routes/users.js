const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET users
    //  /users/
router.get('/', function(req, res) {
  res.send({ title: '/users' });
});

// /users/update
router.post('/update', async function(req, res) {

  // const findAllUserPets = await prisma.user_pet.findMany({
  //   where: {
  //     user_id: req.body.userId
  //   },
  //   include: {
  //     pet: true
  //   },
  // });

  const updateUserDetails = await prisma.user.updateMany({
    where: {
      id: req.body.id
    },
    data: {
      username: req.body.username,
      // email: req.body.email,
      // password: req.body.password
    }
  });

  // console.log('updateUser', updateUserDetails)

  res.status(200).send('User Updated');
  
});

// /users/register
router.post('/register', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await prisma.user.findUnique({
    where: { email: req.body.email}
  });

  if (!email || !password) {
    return res.status(400).send("Error - A field is empty!");
  }

  if (user) {
      return res.status(400).send("Error - An account with this Email already exists!");
  }

  // Password Hasher, SALT 10
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  // prisma - insert into database
  const new_user = await prisma.user.create({
    data: {
      username: req.body.username,
      email: email,
      password: hashedPassword
    }
  });

  // change hard-coded ID from Sequelize return
  console.log('PRISMA USER----->', new_user);
  
  res.cookie('user_id', new_user.id, {
    maxAge: 900000, httpOnly: true
  });

  res.status(200).json(new_user)
  // res.send('Successful');
});

module.exports = router;