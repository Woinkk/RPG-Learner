const Result = require('../models/result.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getMatiere(req, res) {
    const TSession = req.session;
    const body = req.body;

    const result = await Result.insert({goodanswers: body.GoodAnswer, idstudent: TSession.userId ,idquizz: body.IdQuizz});

    res.json(result);
}

module.exports = getMatiere;