const express = require('express');
const router = express.Router();

// Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function(req, res) {
  res.render('logout');
});

router.post('/', async function(req, res) {
  
  res.cookie('user_id', null);
  console.log('cookie-----', req.cookies);

  res.redirect('/')
  // res.status(200);
});

module.exports = router;