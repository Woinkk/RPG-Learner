const Subject = require('../models/subject.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getSubject(req, res) {
    const result = await Subject.getAll();

    console.log(result);

    res.json(result);
}

module.exports = getSubject;