const Student = require('../models/student.js')
const Class = require('../models/class.js')


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postInsertNewStudent(req, res) {

    //TODO :VERIF QUE LE PROF SOIT CO Et FAIRE PASSER l'idClasses choisis par un select

console.log("BODYYYY "+req.body.tclass)
    var newStudent ={
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        idclasses: await Class.getClassByName(req.body.tclass),
        password :req.body.firstname.concat('', req.body.lastname)
    }
    console.log("password" + newStudent.password)
    const addStudent = await Student.insertAccountNewStudent(newStudent);
    if (addStudent) {
        res.json(addStudent)
        return;
    }

    res.status(401)
        .send('Unknown parameters;');
}
module.exports = postInsertNewStudent;