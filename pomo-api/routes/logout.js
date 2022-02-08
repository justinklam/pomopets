const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// });

router.get('/', async function(req, res) {
  res.render('logout');
});

router.post('/', async function(req, res) {
  
  res.cookie('user_id', null);
  console.log('cookie-----', req.cookies);

  res.render('logout');
});

module.exports = router;