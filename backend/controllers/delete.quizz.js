const Quizz = require('../models/quizz.js');
const Question  = require ('../models/question.js');
const AnswerStudent = require('../models/answerStudent.js');
const Result = require('../models/result.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function deleteQuizz(req, res) {
    const TSession = req.session;
    const params = req.params;

    console.log(params);

    const idQuestion = await Question.getAllQuestionByIdQuizz(params.id);

    for (let i = 0; i < idQuestion.length; i++) {
        const element = idQuestion[i];
        await AnswerStudent.deleteByIdQuestion(element.id);
    }

    await Question.deleteAllQuestionByQuizzId(params.id);

    await Result.deleteByIdQuizz(params.id);
    
    await Quizz.delete(params.id);
    
    res.sendStatus(200);
}

module.exports = deleteQuizz;