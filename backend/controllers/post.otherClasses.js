const Class = require('../models/class.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postOtherClasses (req, res) {
  const response = await Class.getAllClasses();
  res.json(response.rows);
}

module.exports = postOtherClasses;
