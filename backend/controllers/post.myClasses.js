const TeacherClass = require('../models/teacher_class.js');
const Class = require('../models/class.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postMyClasses (req, res) {
  const TSession = req.session;
  const MyClasses = await TeacherClass.getClassByTeacher(TSession.userId);
  if (MyClasses.rows.length === 1) {
    const name = await Class.getClassById(MyClasses.rows[0].idclasses);
    res.json(name.rows);
  } else {
    const response = [];
    for (let i = 0; i < MyClasses.rows.length; i++) {
      const names = await Class.getClassById(MyClasses.rows[i].idclasses);
      response.push(names.rows[0]);
    }
    res.json(response);
  }
}

module.exports = postMyClasses;
