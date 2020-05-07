var express = require('express');
var router = express.Router();

const postLogin = require('../controllers/post.login.js');
const postMyClasses = require('../controllers/post.myClasses.js');
const postOtherClasses = require('../controllers/post.otherClasses.js');

async function isAuthenticated (req, res, next) {
  if (req.session.userId) {
    next();
    return;
  }
  res.status(401).send('unauthorized(1)');
}

router.post('/login', postLogin);
router.post('/myClasses', postMyClasses);
router.post('/otherClasses', postOtherClasses);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
