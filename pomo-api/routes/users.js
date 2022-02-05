const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

/* GET users listing. */
router.get('/', function(req, res) {

  const findUsers = User.findAll();
  findUsers.then(result => {
    console.log('RESULT', result)
  })
  
  console.log("USERS", findUsers);
  res.send({ title: '/users' });

});

router.post('/register', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const userID = User.findOne({
    where: { email: req.body.email}
  });

  if (!email || !password) {
    return res.status(400).send("Error - A field is empty!");
  }

  if (userID) {
      return res.status(400).send("Error - An account with this Email already exists!");
  }

  // Password Hasher
  const hashedPassword = bcrypt.hashSync(password, 10);
  // SALT - random string that makes the password unpredictable, 10 is the encryption cost factor/Salt round
  
  // sequelize - insert into database
  const newUser = await User.Create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: email,
    password: hashedPassword
  });
  

  // users[ID] = {
  //   id: ID,
  //   email: email,
  //   password: hashedPassword,
  // };
  // req.session.userID = (ID);

  // res.send({ title: '/users' });
});

module.exports = router;