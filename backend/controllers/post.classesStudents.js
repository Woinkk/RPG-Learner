const Student = require('../models/student.js');
const Class = require('../models/class.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postClassesStudents (req, res) {
    const classes = await Class.getIdClassByName(req.body.name);
    const response = await Student.getStudentsByClasses(classes.rows[0].id);
    if(response.rows.length > 0) res.json(response.rows);
    else res.json(null);
}

module.exports = postClassesStudents;