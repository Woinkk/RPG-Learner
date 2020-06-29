const Student = require('../models/student.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postOtherClasses (req, res) {
  const response = await Student.getSkin(req.session.userId);
  console.log(response.rows[0].type);
  res.json(response.rows[0].type);
}

module.exports = postOtherClasses;