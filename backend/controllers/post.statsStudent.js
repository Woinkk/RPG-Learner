const Result = require('../models/result.js');
const Quizz = require('../models/quizz.js');
const Question = require('../models/question.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postStatsStudent (req, res) {
    const userId = req.session.userId;
    let quizz;
    let question;
    let list = [];

    const result = await Result.getByIdStudents(req.body.id);

    for(let i = 0; i < result.length; i++) {
        quizz = await Quizz.byIdTeacherIfStudentHasIt(result[i].idquizz, userId);

        if(quizz.rowCount !== 0) {
            question = await Question.getAllQuestionByIdQuizz(result[i].idquizz);

            result[i].quizzName = quizz.rows[0].name;
            result[i].quizzGood = (result[i].goodanswers / question.length) * 100;
            list.push(result[i]);
        }
    }

    res.json(list);

}

module.exports = postStatsStudent;