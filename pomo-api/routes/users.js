const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

// GET users
    //  /users/
router.get('/', function(req, res) {

  // const findUsers = User.findAll();
  // findUsers.then(result => {
  //   console.log('RESULT', result)
  // })
  
  // console.log("USERS", findUsers);
  res.send({ title: '/users' });

});

// POST register
    // /users/register
router.post('/register', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await prisma.user.findUnique({
    where: { email: req.body.email}
  });

  console.log('userID----->', user);

  if (!email || !password) {
    return res.status(400).send("Error - A field is empty!");
  }

  if (user) {
      return res.status(400).send("Error - An account with this Email already exists!");
  }

  // Password Hasher, SALT 10
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  // prisma - insert into database
  const newUser = await prisma.user.create({
    data: {
      username: req.body.username,
      email: email,
      password: hashedPassword
    }
  });

  // change hard-coded ID from Sequelize return
  console.log('PRISMA USER----->', newUser);
  
  res.cookie('user_id', newUser.id, {
    maxAge: 900000, httpOnly: true
  });

  res.send('Successful');

});

module.exports = router;