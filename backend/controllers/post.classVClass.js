const ClassVClass = require('../models/classVclass.js');
const Class = require('../models/class.js');
const Teacher = require('../models/teacher.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postClassVClass (req, res) {
  if (req.body.selectedMyClasses === null || req.body.selectedAllClasses === null ||
        (req.body.selectedMyClasses === req.body.selectedAllClasses)) {
    res.status(401)
      .send('Null or same selected');
  }

  const datenull = null;
  const idclass1 = await Class.getIdByName(req.body.selectedMyClasses);
  const idclass2 = await Class.getIdByName(req.body.selectedAllClasses);
  
  const matiere = await Teacher.getTeacherById(req.session.userId);

  const resp = await ClassVClass.create(idclass1.rows[0].id, idclass2.rows[0].id, datenull, matiere.rows[0].idmatiere);

  req.session.classVClass = resp.rows[0].id;
  req.session.editClassVClass = false;
  req.session.myClass = req.body.selectedMyClasses;
  req.session.otherClass = req.body.selectedMyClasses;

  res.status(200)
    .send('All good');
}

module.exports = postClassVClass;
