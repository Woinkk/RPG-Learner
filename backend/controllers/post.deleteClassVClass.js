const QuizzClassVClass = require('../models/quizzClassVClass.js');
const ClassVClass = require('../models/classVclass.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postDeleteClassVClass (req, res) {
    const quizzDelete = QuizzClassVClass.deleteByClassVClassId(req.body.id);
    const classVClassDelete = ClassVClass.deleteById(req.body.id);

    res.status(200)
        .send('All good');
}

module.exports = postDeleteClassVClass;
