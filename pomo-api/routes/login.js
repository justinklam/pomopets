const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('login', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const userID = await User.findOne({
    where: { email: email}
  });

  if (!email || !password) {
    res.send('A field is empty!')    
  };

  if (!userID || bcrypt.compareSync(password, userID.password)) {
    res.send('Account Credentials are incorrect!')    
  };

  // user_id key, newUser.id is the value of the cookie
  res.cookie('user_id', newUser.id, {
    maxAge: 900000, httpOnly: true
  });
  res.send('Successful');

});

module.exports = router;