const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

// GET users
    //  /users/
router.get('/', function(req, res) {
  res.send({ title: '/users' });
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