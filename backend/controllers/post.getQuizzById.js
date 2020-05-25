const Quizz = require('../models/quizz.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postGetQuizzById (req, res) {
  const response = await Quizz.getById(req.body.idquizz);
  console.log(response);
  res.json(response[0]);
}

module.exports = postGetQuizzById;
