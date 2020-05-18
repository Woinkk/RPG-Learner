const Quizz = require('../models/quizz.js');
const Teacher = require('../models/teacher.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postAllQuizzes (req, res) {
  const MyId = req.session.userId;
  var listTeacher = [];
  var removeQuizz = [];
  var myMatiere;
  var verif = false;
  var MyMatiere;


  const allQuizzes = await Quizz.getAllQuizzes();
  for (let i = 0; i < allQuizzes.rows.length; i++) {
    for(let j = 0; j < listTeacher.length; j++) {
      if(allQuizzes.rows[i].idteacher === listTeacher[j]) verif = true;
    }
    if(!verif) listTeacher.push(allQuizzes.rows[i].idteacher);
    verif = false;
  }

  MyMatiere = await Teacher.getTeacherById(MyId);
  myMatiere = MyMatiere.rows[0].idmatiere;

  for(let i = 0; i < listTeacher.length; i++) {
    MyMatiere = await Teacher.getTeacherById(listTeacher[i]);
    if(MyMatiere.rows[0].idmatiere !== myMatiere) listTeacher.splice(i, 1);
  }
  
  verif = false;
  for (let i = 0; i < allQuizzes.rows.length; i++) {
    for(let j = 0; j < listTeacher.length; j++) {
      if(allQuizzes.rows[i].idteacher === listTeacher[j]) verif = true;
    }
    if(!verif) removeQuizz.push(allQuizzes.rows[i]);
    verif = false;
  }

  for(let i = 0; i < removeQuizz.length; i++) {
    for(let j = 0; j < allQuizzes.rows.length; j++) {
      if(removeQuizz[i].id === allQuizzes.rows[j].id) allQuizzes.rows.splice(j, 1);
    }
  }

  allQuizzes.rows[0].userId = MyId;
  res.json(allQuizzes.rows);
}

module.exports = postAllQuizzes;
