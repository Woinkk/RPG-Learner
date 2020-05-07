const Student = require('../models/student.js')


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postInsertNewStudent(req, res) {

//TODO :VERIF QUE LE PROF SOIT CO Et FAIRE PASSER l'idClasses choisis par un select
    


    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const password = req.body.password

    const addStudent = await Student.insertAccountNewStudent(firstname, lastname, password);
    if(addStudent){
        res.json(addStudent)
        return;
    }
    
    res.status(401)
        .send('Unknown parameters;');
}
module.exports = postInsertNewStudent;