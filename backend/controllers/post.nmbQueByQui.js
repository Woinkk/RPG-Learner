const Question = require('../models/question.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postNmbQueByQui (req, res) {
    const response = await Question.getQuestionsByQuizz(req.body.id);
    res.json(response.rows.length);
}

module.exports = postNmbQueByQui;