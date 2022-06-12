const express = require('express');

// Middleware and Libaries 
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const timersRouter = require('./routes/timers');
const petsRouter = require('./routes/pets');
const logoutRouter = require('./routes/logout');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Use Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/timers', timersRouter);
app.use('/pets', petsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(err.message);

  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send('error');
});

module.exports = app;
