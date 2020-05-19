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

        const good = element.reponses.findIndex(element => element.value === true)
        const json = { question: element.question, reponse1: element.reponses[0].text, reponse2: element.reponses[1].text, reponse3: element.reponses[2].text, reponse4: element.reponses[3].text, good: good+1};
        
        console.log("JSON:", json);

        await Question.updateByIdQuestion(json);
    }

    const quizz = {name: body.quizzName, idQuizz: body.quizzId}
    Quizz.updateByIdQuizz(quizz);
    
    res.sendStatus(200);
}

module.exports = modifyQuizz;