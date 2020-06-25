const Inventory = require('../models/inventory.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postAddItem (req, res) {
    const studentId = req.session.userId;
    console.log(req.body.id);
    let essai = await Inventory.checkQuantity(studentId, req.body.id);
    if(essai.rows.length === 0) {
        let create = await Inventory.addItemCustom(studentId, req.body.id, 1)
    } else {
        let add = await Inventory.addQuantity(studentId, req.body.id);
    }

    res.json(null);
}

module.exports = postAddItem;
