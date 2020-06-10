const Teacher = require('../models/teacher.js');
const Student = require('../models/student.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function putModifyPassword(req, res) {
    console.log("sessions", req.session)
    console.log("wsh")
    if (req.session.userId) {
        let modifyProp = {
            password: req.body.password
        }
        if (req.session.whoIsConnected === "teacher") {
            let mail = await Teacher.getEmailById(req.session.userId)
            const teacher = await Teacher.modifyTeacherPassword(modifyProp.password, mail)
            if (teacher) {
                res.json(teacher)
                delete req.session.userId;
                delete req.session.whoIsConnected;
                res.status(200).send('Disconnected');
                return
        }
        res.status(401)
            .send('Impossible de modifié le password');
    }
    if (req.session.whoIsConnected === "student") {
        let mail = await Student.getEmailById(req.session.userId)
        const student = await Student.modifyStudentPassword(modifyProp, mail)
        if (student) {
            res.json(student)
            delete req.session.userId;
            delete req.session.whoIsConnected;
            return
        }
        res.status(401)
            .send('Impossible de modifié le password');
    }

    res.status(401)
        .send('Impossible de modifié le password');
}

res.status(401)
    .send('Impossible de modifié le password');

}

module.exports = putModifyPassword;