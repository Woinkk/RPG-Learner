var express = require('express');
var router = express.Router();

const postLogin = require('../controllers/post.login.js');
const postInsertNewStudent = require ('../controllers/post.insertNewStudent.js');
const postMyClasses = require('../controllers/post.myClasses.js');
const postOtherClasses = require('../controllers/post.otherClasses.js');
const postClassVClass = require('../controllers/post.classVClass.js');

async function isAuthenticated (req, res, next) {
  if (req.session.userId) {
    next();
    return;
  }
  res.status(401).send('unauthorized(1)');
}

router.get('/',function (req,res,next){
  if(req.sessions.userId){
    var connected= true
    return connected
  }
  res.status(401).send('unauthorized(1)');
});

router.post('/login', postLogin);
router.put('/createNewStudent',postInsertNewStudent);
router.post('/myClasses', postMyClasses);
router.post('/otherClasses', postOtherClasses);
router.post('/ClassVClass', postClassVClass);

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
