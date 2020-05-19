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
const getQuizz = require('../controllers/get.quizz.js');
const deleteQuizz =  require('../controllers/delete.quizz.js');
const getQuizzById = require('../controllers/get.quizzById.js');
const postSavingClassVClass = require('../controllers/post.savingClassVClass.js');
const postMyClassVClass = require('../controllers/post.myClassVClass.js');
const postDeleteClassVClass = require('../controllers/post.deleteClassVClass.js');
const putModifyQuizz = require('../controllers/put.modifyQuizz.js');

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
router.post('/allQuizz', postAllQuizzes);
router.post('/NmbQueByQui', postNmbQueByQui);
router.post('/SubjectByQuizz', postSubjectByQuizz);
router.post('/myClassVClass', postMyClassVClass)
router.post('/SavingClassVClass', postSavingClassVClass);
router.post('/deleteClassVClass', postDeleteClassVClass);
router.put('/createQuizz', putCreateQuizz);

router.put('/createSubject', putCreateSubject);
router.get('/getMatiere', getMatiere);
router.get('/getSubject', getSubject);
router.get('/getQuizz', getQuizz);
router.get('/getQuizz/:id', getQuizzById);
router.delete('/deleteQuizz/:id', deleteQuizz);
router.put('/modifyQuizz/:id', putModifyQuizz);

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
