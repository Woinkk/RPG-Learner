const Quizz = require('../models/quizz.js');
const Subject = require('../models/subject.js');
const Matiere =require('../models/matiere.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getQuizz(req, res) {
    const TSession = req.session;
    
    const result = await Quizz.getAll();

    let finalResult = [];

     for (let i = 0; i < result.length; i++) {
        const element = result[i];
        
        const subjectName = await Subject.getSubjectNameById(element.idsubject);
        const matiereName = await Matiere.getNameById(element.idteacher);

        const Quizz = { id: element.id, name: element.name, subject: subjectName[0].name, matiere: matiereName[0].name };

        finalResult = [...finalResult, Quizz];
    }

    console.log(finalResult);
    
    res.json(finalResult);
}

module.exports = getQuizz;