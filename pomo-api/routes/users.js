const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res) {

  const findUsers = User.findAll();
  findUsers.then(result => {
    console.log('RESULT', result)
  })
  
  console.log("USERS", findUsers);
  res.send({ title: '/users' });

});

router.post('/register', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const userID = await User.findOne({
    where: { email: req.body.email}
  });

  console.log('userID----->', userID);

  if (!email || !password) {
    return res.status(400).send("Error - A field is empty!");
  }

  if (userID) {
      return res.status(400).send("Error - An account with this Email already exists!");
  }

  // Password Hasher, SALT 10
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  // sequelize - insert into database
  const newUser = await User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: email,
    password: hashedPassword,
  });

  // change hard-coded ID from Sequelize return
  console.log('Sequelize USER----->', newUser);
  
  res.cookie('user_id', newUser.id, {
    maxAge: 900000, httpOnly: true
  });

  res.send('Successful');

});

module.exports = router;