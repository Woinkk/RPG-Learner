const QuizzClassVClass = require('../models/quizzClassVClass.js');
const ClassVClass = require('../models/classVclass.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postClassVClassLoader (req, res) {
    if(req.session.editClassVClass) {
        const resp = await QuizzClassVClass.getQuizzByClassVClassId(req.session.classVClass);
        const time = await ClassVClass.getClassVClassTime(req.session.classVClass);
        resp.date = time.rows[0].date;
        console.log(resp.rows);
        res.json(resp);
    } else if(!req.session.editClassVClass) {
        res.json(null);
    }
}

module.exports = postClassVClassLoader;