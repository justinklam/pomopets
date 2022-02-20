const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function(req, res) {

  // query to locate user's timers
  const timers = await prisma.user.findMany({
    where: {
      id: 2
      // id: req.body.id
    },
    include: {
      timers: {
        select: {
          description: true,
          created_at: true,
          updated_at: true
        }
      }
    }
  });

  console.log('timers-----', timers);

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 2
  //   },
  //   select: {
  //     email: true,
  //     username: true
  //   }
  // });

  res.render('timer');
});

router.post('/', async function(req, res) {

  const new_timer = await prisma.timer.create({
    data: {
      user_id: req.body.userId,
      description: req.body.description
    }
  });

  // console.log('new_timer-----', new_timer)
  
  res.send('Timer created');
});

module.exports = router;