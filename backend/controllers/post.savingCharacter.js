const Student = require('../models/student.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postSavingCharacter (req, res) {
    const response = await Student.saveCharacter(req.session.userId, req.body);
    res.json(response.rows);
}

module.exports = postSavingCharacter;