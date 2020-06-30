const Quizz = require('../models/quizz.js');
const Question = require('../models/question.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getFullQuizzById(req, res) {
    const TSession = req.session;
    const QuizzId = req.params.id;
    
    const AllQuizz = await Quizz.getById(QuizzId)
    const AllQuestion = await Question.getAllQuestionByIdQuizz(QuizzId);

    const result = {
        Quizz: AllQuizz,
        Questions: AllQuestion
    }

    console.log(result);

    res.json(result);
}

module.exports = getFullQuizzById;