const Subject = require('../models/subject.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postSubjectByQuizz (req, res) {
  console.log(req.body);
  const response = await Subject.getSubjectById(req.body.idsubject);
  res.json(response.rows[0].name);
}

module.exports = postSubjectByQuizz;