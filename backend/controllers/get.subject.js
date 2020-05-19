const Subject = require('../models/subject.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getSubject(req, res) {
    const TSession = req.session;


    const result = await Subject.getSubjectByTeacher(TSession.userId);

    console.log(result);

    res.json(result);
}

module.exports = getSubject;