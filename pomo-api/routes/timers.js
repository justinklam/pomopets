const express = require('express');
const router = express.Router();
const { User, Timer } = require('../db/models');

router.get('/new_timer', async function(req, res, next) {

  const new_timer = await Timer.create({
    user_id: req.body.User.id,
    description: 'Example',
    is_active: true
  });

  console.log('newTimer-----', new_timer)
  
  res.send({ title: 'timer' });
});

module.exports = router;