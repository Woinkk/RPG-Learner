const ClassVClass = require('../models/classVclass.js');
const Class = require('../models/class.js');

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

  const datenull = "0001-01-01 01:01:01";
  const list = [];
  const idclass1 = await Class.getIdByName(req.body.selectedMyClasses);
  const idclass2 = await Class.getIdByName(req.body.selectedMyClasses);

  const resp = await ClassVClass.create(idclass1.rows[0].id, idclass2.rows[0].id, datenull, list);

  req.session.myClass = req.body.selectedMyClasses;Object
  req.session.otherClass = req.body.selectedMyClasses;

  res.status(200)
    .send('All good');
}

module.exports = postClassVClass;
