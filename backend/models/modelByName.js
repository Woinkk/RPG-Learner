const classe = require('./class.js');
const inventory = require('./inventory.js');
const item = require('./item.js');
const matiere = require('./matiere.js');
const question = require('./question.js');
const quizz = require('./quizz.js');
const result = require('./result.js');
const school = require('./school.js');
const student = require('./student.js');
const subject = require('./subject.js');
const teacher = require('./teacher.js');
const teacher_class = require ('./teacher_class.js');
const classVclass = require ('./classVclass.js');
const classLevel = require('./classLevel.js');
const answerStudent = require('./answerStudent.js');
const quizzClassVClass = require('./quizzClassVClass.js');
const stats =require('./stats.js');

module.exports = [
  item,
  school,
  classLevel,
  classe,
  student,
  matiere,
  teacher,
  subject,
  quizz,
  question,
  answerStudent,
  inventory,
  result,
  teacher_class,
  classVclass,
  quizzClassVClass,
  stats,
];
