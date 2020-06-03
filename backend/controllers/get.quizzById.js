const Quizz = require('../models/quizz.js');
const Subject = require('../models/subject.js');
const Matiere = require('../models/matiere.js');
const Question = require('../models/question.js');
const Teacher = require('../models/teacher.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getQuizz(req, res) {
    const TSession = req.session;
    const params = req.params;
    
    const result = await Quizz.getById(params.id);

    console.log(result);

    const subjectName = await Subject.getSubjectNameById(result[0].idsubject);
    const idMatiere = await Teacher.getMatiereIdByTeacher(TSession.userId)
    const matiereName = await Matiere.getNameById(idMatiere[0].idmatiere);

    const MyQuizz = { id: result[0].id, quizzName: result[0].name, subject: subjectName[0].name, matiere: matiereName[0].name, question : [], classLevel: result[0].classlevel };

    const allQuestions = await Question.getAllQuestionByIdQuizz(params.id);

    for (let i = 0; i < allQuestions.length; i++) {
        const element = allQuestions[i];
        
        MyQuizz.question = [...MyQuizz.question, {id: element.id, question: element.question, reponses: [{text: element.reponse1},  {text: element.reponse2}, {text: element.reponse3}, {text: element.reponse4}], goodAnswer: element.good}]

        //MyQuizz.question[i].reponses[element.good-1].value = true;
    }

    console.log(MyQuizz);
    
    res.json(MyQuizz);
}

module.exports = getQuizz;