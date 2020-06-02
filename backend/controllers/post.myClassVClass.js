const Teacher = require('../models/teacher.js');
const ClassVClass = require('../models/classVclass.js');
const Teacher_Class = require('../models/teacher_class.js');
const Class = require('../models/class.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postMyClassVClass (req, res) {
    const matiere = await Teacher.getTeacherById(req.session.userId);
    const classes = await Teacher_Class.getClassByTeacher(req.session.userId);
    var list = [];
    var verif;
    const id = 1;

    for(let i = 0; i < classes.rows.length; i++) {
        var myClassVClass = await ClassVClass.selectMyClassVClass(matiere.rows[0].id, classes.rows[i].idclasses);
        verif = false;
        for(let m = 0; m < myClassVClass.rows.length; m++) {
            for(let j = 0; j < list.length; j++) {
                if(list[j].id === myClassVClass.rows[m].id) verif = true;
            }
            if(!verif) list.push(myClassVClass.rows[m]);
        }
    }

    var date;
    for(let i = 0; i < list.length; i++) {
        var name = await Class.getClassById(list[i].idclass1);
        list[i].name1 = name.rows[0].name;
        var name = await Class.getClassById(list[i].idclass2);
        list[i].name2 = name.rows[0].name;
        if(list[i].date !== null) {
            list[i].date = list[i].date.toLocaleString();
        }
    }
    res.json(list);
}

module.exports = postMyClassVClass;