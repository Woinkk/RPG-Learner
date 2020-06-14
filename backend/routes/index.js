var express = require('express');
var router = express.Router();

const postLogin = require('../controllers/post.login.js');
const putModifyPassword = require('../controllers/put.modifyPassword.js')
const postInsertNewStudent = require('../controllers/post.insertNewStudent.js');
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
const deleteQuizz = require('../controllers/delete.quizz.js');
const getQuizzById = require('../controllers/get.quizzById.js');
const postSavingClassVClass = require('../controllers/post.savingClassVClass.js');
const postMyClassVClass = require('../controllers/post.myClassVClass.js');
const postDeleteClassVClass = require('../controllers/post.deleteClassVClass.js');
const putModifyQuizz = require('../controllers/put.modifyQuizz.js');
const postEditClassVClass = require('../controllers/post.editClassVClass.js');
const postClassVClassLoader = require('../controllers/post.classVClassLoader.js');
const postGetQuizzById = require('../controllers/post.getQuizzById.js');
const postClassesStudents = require('../controllers/post.classesStudents.js');
const postMyClassVClassSpecific = require('../controllers/post.myClassVClassSpecific.js');
const postStatsStudent = require('../controllers/post.statsStudent.js');
const putUseItem = require('../controllers/put.useItem.js');
const postInventory = require('../controllers/post.inventory.js')

async function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next();
    return;
  }
  res.status(401).send('unauthorized(1)');
}

router.get('/who', function (req, res, next) {
  console.log("ALLOOO " + req.session)
  if (req.session.userId != null) {
    if (req.session.whoIsConnected === "teacher") {
      var connected = req.session.whoIsConnected;
    } else if (req.session.whoIsConnected === "student") {
      var connected = req.session.whoIsConnected
    }
    var result = { status: 200, connected: connected }
    res.json(result);
  } else {
    res.status(401).send('unauthorized(1)');
  }
});

router.delete('/logout', (req, res) => {
  if (req.session.userId) {
    delete req.session.userId;
    delete req.session.whoIsConnected;
    res.status(200).send('Disconnected');
  } else {
    res.status(401).send('Already disconnected');
  }
});

router.post('/login', postLogin);
router.put('/account', putModifyPassword);
router.put('/createNewStudent', postInsertNewStudent);
router.post('/myClasses', postMyClasses);
router.post('/otherClasses', postOtherClasses);
router.post('/ClassVClass', postClassVClass);
router.post('/allQuizz', postAllQuizzes);
router.post('/NmbQueByQui', postNmbQueByQui);
router.post('/SubjectByQuizz', postSubjectByQuizz);
router.post('/myClassVClass', postMyClassVClass);
router.post('/SavingClassVClass', postSavingClassVClass);
router.post('/deleteClassVClass', postDeleteClassVClass);
router.post('/editClassVClass', postEditClassVClass);
router.post('/classVClassLoader', postClassVClassLoader);
router.post('/GetQuizzById', postGetQuizzById);
router.put('/createQuizz', putCreateQuizz);
router.post('/myClassVClassSpecific', postMyClassVClassSpecific)
router.post('/classesStudents', postClassesStudents);
router.post('/statsStudent', postStatsStudent);
router.put('/createSubject', putCreateSubject);
router.get('/getMatiere', getMatiere);
router.get('/getSubject', getSubject);
router.get('/getQuizz', getQuizz);
router.get('/getQuizz/:id', getQuizzById);
router.delete('/deleteQuizz/:id', deleteQuizz);
router.put('/modifyQuizz/:id', putModifyQuizz);
router.put('/useItem', putUseItem);
router.post('/inventory', postInventory);


/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
