const Matiere = require('../models/matiere.js');
const Teacher = require('../models/teacher.js');
const Student = require('../models/student.js');
const Quizz = require('../models/quizz.js');
const Class = require('../models/class.js');
const ClassLevel = require('../models/classLevel.js');
const Teacher_class = require('../models/teacher_class.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getAllQuizzByTeacherAndClasses(req, res) {
    const TSession = req.session;

    console.log(TSession);

    const studentIdClass = await Student.getIdClasses(TSession.userId);
    console.log("ID CLASS",studentIdClass[0]);

    const allClassTeacher = await Teacher_class.getIdTeacher(studentIdClass[0].idclasses);
    console.log("ID TEACHERS",allClassTeacher[0]);

    const idClassLevel = await Class.getIdClassLevel(studentIdClass[0].idclasses);
    console.log("ID CLASSLEVEL", idClassLevel[0]);

    const studentClassLevel = await ClassLevel.getLevelById(idClassLevel[0].idclasslevel);
    console.log("CLASSLEVEL", studentClassLevel[0]);
    
    let AllQuizzByClassLevelAndTeacher = [];

    for (let i = 0; i < allClassTeacher.length; i++) {
        const element = allClassTeacher[i];

        console.log("ID TEACHER IN FOR",element.idteacher);
        console.log("CLASSLEVEL IN FOR",studentClassLevel[0].level);

        const quizz = await Quizz.getQuizzByClassLevelAndTeacher(element.idteacher, studentClassLevel[0].level);

        console.log("QUIZZ IN FOR", quizz)
        if (quizz.length > 0) {
            for (let j = 0; j < quizz.length; j++) {
                const element = quizz[j];
                AllQuizzByClassLevelAndTeacher.push(element);
            }
        }
    }
    console.log("ALL QUIZZ BY TEACHER AND CLASSLEVEL", AllQuizzByClassLevelAndTeacher);

    let AllMatiere = [];

    for (let i = 0; i < AllQuizzByClassLevelAndTeacher.length; i++) {
        const element = AllQuizzByClassLevelAndTeacher[i];
        console.log("ELEMENT",element);
        const idmatiere = await Teacher.getMatiereIdByTeacher(element.idteacher);
        console.log("id matiere",idmatiere);
        const matiereName = await Matiere.getNameById(idmatiere[0].idmatiere);

        AllMatiere.push(matiereName[0]);
    }
    console.log("ALL MATIERE", AllMatiere);

    const json = {Quizz: AllQuizzByClassLevelAndTeacher, Matiere: AllMatiere}

    res.json(json);
}

module.exports = getAllQuizzByTeacherAndClasses;