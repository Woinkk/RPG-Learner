var express = require('express');
var router = express.Router();

const postLogin = require('../controllers/post.login.js');
const putCreateSubject = require('../controllers/put.createSubject.js');
const putCreateQuizz = require('../controllers/put.createQuizz.js');
const getMatiere = require('../controllers/get.matiere.js');
const getSubject = require('../controllers/get.subject.js');


async function isAuthenticated (req, res, next) {
  if (req.session.teacherId) {
    next();
    return;
  }
  res.status(401).send('unauthorized(1)');
}

router.post('/login', postLogin);

router.put('/createQuizz', putCreateQuizz);

router.put('/createSubject', putCreateSubject);

router.get('/getMatiere', getMatiere);

router.get('/getSubject', getSubject);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
