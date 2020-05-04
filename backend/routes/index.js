var express = require('express');
var router = express.Router();

const postLogin = require('../controllers/post.login.js');
const postMyClasses = require('../controllers/post.myClasses.js');

async function isAuthenticated (req, res, next) {
  if (req.session.userId) {
    next();
    return;
  }
  res.status(401).send('unauthorized(1)');
}

router.post('/login', postLogin);
router.post('/home', postMyClasses);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
