const Teacher = require('../models/teacher.js')
const Matiere = require('../models/matiere.js')


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postInsertNewTeacher(req, res) {

    const check = await Teacher.checkAddTeacher(req.body.email)
    console.log(check)
    if (check.rows[0]) {
        res.status(401)
        .send('Unknown parameters;');
    }else {
        console.log("çapss")
        let idMatiere = await Matiere.getId(req.body.matiere);
        console.log(idMatiere);
        var newTeacher = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            idMatieres: idMatiere.id,
            password: req.body.firstname.concat('', req.body.lastname)
        }
    
        //console.log("idclasses"+ newTeacher.idclasses)
        //console.log("password" + newTeacher.password)
    
        const addTeacher = await Teacher.insertAccountNewTeacher(newTeacher);
        if (addTeacher) {
            res.json(addTeacher)
            return;
        }
        res.status(401)
            .send('Unknown parameters;');
    }
   



}
module.exports = postInsertNewTeacher;