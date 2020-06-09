const ClassVClass = require('../models/classVclass.js');
const Classes = require('../models/class.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postMyClassVClassSpecific (req, res) {
    var list = [];
    const resp = await ClassVClass.getClassesByClassVClassId(req.session.classVClass);

    const classe1 = await Classes.getClassById(resp.rows[0].idclass1);
    const classe2 = await Classes.getClassById(resp.rows[0].idclass2);

    list.push(classe1.rows[0].name);
    list.push(classe2.rows[0].name);    
    res.json(list);
}

module.exports = postMyClassVClassSpecific;