const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async function(req, res) {
  res.render('/logout');
});

router.post('/', async function(req, res) {
  
  res.cookie('user_id', null);
  console.log('cookie-----', req.cookies);

  res.render('logout');
});

module.exports = router;