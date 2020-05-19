const Matiere = require('../models/matiere.js');
const Teacher = require('../models/teacher.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getMatiere(req, res) {
    const TSession = req.session;
    
    const idMatiere = await Teacher.getMatiereIdByTeacher(TSession.userId)
    const result = await Matiere.getNameById(idMatiere[0].idmatiere);

    console.log(result);

    res.json(result);
}

module.exports = getMatiere;