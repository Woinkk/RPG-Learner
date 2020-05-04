const TeacherClass = require('../models/teacher_class.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postMyClasses (req, res) {
  const TSession = req.session;
  console.log('ALZLALZLZALZLLZLZLZLZZLDAZLDLZL');
  const MyClasses = await TeacherClass.getClassByTeacher(TSession);
  console.log('ALZLALZLZALZLLZLZLZLZZLDAZLDLZL');

  return MyClasses.rows;
}

module.exports = postMyClasses;
