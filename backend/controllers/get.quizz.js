const Quizz = require('../models/quizz.js');
const Subject = require('../models/subject.js');
const Matiere =require('../models/matiere.js');
const Teacher = require('../models/teacher.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getQuizz(req, res) {
    const TSession = req.session;
    
    const result = await Quizz.getQuizzByIdTeacher(TSession.userId);

    const idMatiere = await Teacher.getMatiereIdByTeacher(TSession.userId)
    const matiereName = await Matiere.getNameById(idMatiere[0].idmatiere);

    let finalResult = [];

     for (let i = 0; i < result.length; i++) {
        const element = result[i];
        
        const subjectName = await Subject.getSubjectNameById(element.idsubject);

        const Quizz = { id: element.id, name: element.name, subject: subjectName[0].name, matiere: matiereName[0].name };

        finalResult = [...finalResult, Quizz];
    }

    console.log(finalResult);
    
    res.json(finalResult);
}

module.exports = getQuizz;