const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('login', function(req, res) {

  const user = User.findOne({
    where: { email: req.body.email}
  });
  if (!user || bcrypt.compareSync(password, user.password)) {
    res.send('Account Credentials are incorrect!')    
  }

});

module.exports = router;
