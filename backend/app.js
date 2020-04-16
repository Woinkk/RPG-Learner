var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require ('express-session');
var cors =require ('cors')

var PostgresStore = require('./utils/PostgresStore.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(session({secret:'secret'}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

PostgresStore.reset();

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
