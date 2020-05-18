var express = require('express');
var router = express.Router();

const postLogin = require('../controllers/post.login.js');
const postInsertNewStudent = require ('../controllers/post.insertNewStudent.js');
const postMyClasses = require('../controllers/post.myClasses.js');
const postOtherClasses = require('../controllers/post.otherClasses.js');
const postClassVClass = require('../controllers/post.classVClass.js');
const postAllQuizzes = require('../controllers/post.allQuizz.js');
const postNmbQueByQui = require('../controllers/post.nmbQueByQui.js');
const postSubjectByQuizz = require('../controllers/post.subjectByQUizz.js');
const putCreateSubject = require('../controllers/put.createSubject.js');
const putCreateQuizz = require('../controllers/put.createQuizz.js');
const getMatiere = require('../controllers/get.matiere.js');
const getSubject = require('../controllers/get.subject.js');

async function isAuthenticated (req, res, next) {
  if (req.session.userId) {
    next();
    return;
  }
  res.status(401).send('unauthorized(1)');
}

router.post('/login', postLogin);
router.post('/createNewStudent',postInsertNewStudent);
router.post('/myClasses', postMyClasses);
router.post('/otherClasses', postOtherClasses);
router.post('/ClassVClass', postClassVClass);
router.post('/allQuizz', postAllQuizzes);
router.post('/NmbQueByQui', postNmbQueByQui);
router.post('/SubjectByQuizz', postSubjectByQuizz);
router.put('/createQuizz', putCreateQuizz);

router.put('/createSubject', putCreateSubject);
router.get('/getMatiere', getMatiere);
router.get('/getSubject', getSubject);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
