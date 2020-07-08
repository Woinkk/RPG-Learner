const School = require('../models/school.js');
const Teacher = require('../models/teacher.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function schoolTeachers (req, res) {
    const response = await Teacher.getTeacherBySchool(req.session.userId);
    if(response.rows.length > 0) res.json(response.rows);
    else res.json(null);
}

module.exports = schoolTeachers;