const answer = require('./answer.js');
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

module.exports = [
  item,
  school,
  classe,
  student,
  subject,
  teacher,
  matiere,
  question,
  answer,
  inventory,
  quizz,
  result,
  teacher_class,
  classVclass

];
