const Matiere = require('../models/matiere.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getMatiere(req, res) {
    const result = await Matiere.getAll();

    console.log(result);

    res.json(result);
}

module.exports = getMatiere;