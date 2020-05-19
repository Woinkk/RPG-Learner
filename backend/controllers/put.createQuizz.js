const Quizz = require('../models/quizz.js');
const Question = require('../models/question.js');
const Matiere = require('../models/matiere.js');
const Subject = require('../models/subject.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function putCreateQuizz(req, res) {
    const TSession = req.session;
    const body = req.body;

    console.log("BODY:", body)

    const quizzName = body.quizzName;
    const matiere = body.matiere;
    const subject = body.subject;
    const quizz = body.quizz;
    const classLevel = body.classLevel;

    const idMatiere = await Matiere.getId(matiere);
    const idSubject = await Subject.getId(subject);

    const idQuestions = [];

    //const found = array1.find(element => element.value === true);

    const idQuizz = await Quizz.insert({name: quizzName, idsubject: idSubject[0].id, idteacher: TSession.userId})

    console.log("ID QUIZZ:", idQuizz);

    for (let i = 0; i < quizz.length; i++) {
        const element = quizz[i];
        const good = element.reponses.findIndex(element => element.value === true)

        const json = { question: element.question, reponse1: element.reponses[0].text, reponse2: element.reponses[1].text, reponse3: element.reponses[2].text, reponse4: element.reponses[3].text, good: good+1, idquizz: idQuizz[0].id};
        const result = await Question.insert(json);
    }

    res.sendStatus(200);

}

module.exports = putCreateQuizz;