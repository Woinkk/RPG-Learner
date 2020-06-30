const School = require('../models/school.js');
const Teacher = require('../models/teacher.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function schoolTeachers (req, res) {
    console.log("c ici")
    console.log(req.body.name)
    const school = await School.getIdSchoolByemail(req.body.email);
    console.log(school)
    const response = await Teacher.getTeacherBySchool(school.rows[0].id);
    if(response.rows.length > 0) res.json(response.rows);
    else res.json(null);
}

module.exports = schoolTeachers;