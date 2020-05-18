const Quizz = require('../models/quizz.js');
const Question = require('../models/question.js');
const Matiere = require('../models/matiere.js');
const Subject = require('../models/subject.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function putCreateQuizz(req, res) {
    const body = req.body;

    const matiere = body.completeQuizz.matiere;
    const subject = body.completeQuizz.subject;
    const quizz = body.completeQuizz.quizz;
    const classLevel = body.completeQuizz.classLevel;

    const idMatiere = await Matiere.getId(matiere);
    const idSubject = await Subject.getId(subject);

    const idQuestions = [];

    for (let i = 0; i < quizz.length; i++) {
        const element = quizz[i];

        const json = {description: element.question, classLevel: classLevel, idMatiere: idMatiere, idSubject: idSubject};
        const result = await Question.insert(json);

        const idQuestion = result.rows[0].id;

        for (let i = 0; i < quizz.reponses.length; i++) {
            const element = quizz.reponses[i];
            
            const json = {description: element.text, value: element.value , type: classLevel, idMatiere: idMatiere, idSubject: idSubject};
            //const result

        }

    }

}

module.exports = putCreateQuizz;