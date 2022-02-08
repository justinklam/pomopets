const express = require('express');
const router = express.Router();
const { User, Timer } = require('../db/models');


router.get('/', async function(req, res) {
  res.render('timer');
});

router.post('/', async function(req, res, next) {

  const new_timer = await Timer.create({
    user_id: User.id,
    description: 'Example',
    is_active: true
  });

  console.log('newTimer-----', new_timer)
  
  res.send('Timer created');
});

module.exports = router;