const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function(req, res) {
  res.render('login');
});

router.post('/', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await prisma.user.findUnique({
    where: { email: req.body.email}
  });

  if (!email || !password) {
    return res.send('A field is empty!')  
  };

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.send('Account Credentials are incorrect!')    
  };

  // user_id key, newUser.id is the value of the cookie
  res.cookie('user_id', user.id, {
    maxAge: 900000, httpOnly: true
  });

  res.status(200).json(user);

});

module.exports = router;