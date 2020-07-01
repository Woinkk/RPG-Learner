const Quizz = require('../models/quizz.js');
const Question  = require ('../models/question.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function modifyQuizz(req, res) {
    const TSession = req.session;
    const params = req.params;
    const body = req.body;

    console.log("Params:", params)
    console.log("Body:", body);

    for (let i = 0; i < body.quizz.length; i++) {
        const element = body.quizz[i];

        //const good = element.reponses.findIndex(element => element.value === true)
        if (element.id != undefined) {
            const json = { question: element.question, reponse1: element.reponses[0].text, reponse2: element.reponses[1].text, reponse3: element.reponses[2].text, reponse4: element.reponses[3].text, good: element.goodAnswer, idquestion: element.id};
            await Question.updateByIdQuestion(json);
            console.log("JSON:", json);
        } else {
            const json = { question: element.question, reponse1: element.reponses[0].text, reponse2: element.reponses[1].text, reponse3: element.reponses[2].text, reponse4: element.reponses[3].text, good: element.goodAnswer, idquizz: body.quizzId};
            await Question.insert(json);
            console.log("JSON:", json);
        }
    }

    const quizz = {name: body.quizzName, classLevel: body.classLevel,idQuizz: body.quizzId}
    Quizz.updateByIdQuizz(quizz);
    
    res.sendStatus(200);
}

module.exports = modifyQuizz;