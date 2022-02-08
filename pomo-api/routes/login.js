const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../db/models');


router.get('/', async function(req, res) {
  res.render('login');
});

router.post('/', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const userID = await User.findOne({
    where: { email: email}
  });
  console.log('user', userID)

  if (!email || !password) {
    res.send('A field is empty!')    
  };

  if (!userID || bcrypt.compareSync(password, userID.password)) {
    res.send('Account Credentials are incorrect!')    
  };

  // user_id key, newUser.id is the value of the cookie
  res.cookie('user_id', User.id, {
    maxAge: 900000, httpOnly: true
  });
  res.send('Successful');

});

module.exports = router;