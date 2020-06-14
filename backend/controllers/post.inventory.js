const Inventory = require("../models/inventory.js")
const Item = require("../models/item.js")


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */



async function inventory(req, res) {
    if (req.session.userId && req.session.whoIsConnected === "student") {

        let idStudent = req.session.userId;
        let items = [];
        const getInventory = await Inventory.getInventoryByIdStudent(idStudent)
        console.log("getInventory", getInventory)
        if (getInventory) {
            for (let i = 0; i < getInventory.rows.length; i++) {
                const getItem = await Item.getItemById(getInventory.rows[i].iditem);
                console.log("GET ITEM",getItem)
                if (getItem) {
                    for (let i = 0; i < getItem.rows.length; i++) {
                        items.push(getItem.rows[i])
                        
                    }
                    res.json(items)
                   
                }
            }
            return
        }
        res.status(401)
            .send('Inventory not found');
    }
    res.status(401)
        .send('Not connected or not connected with student account');
}


module.exports = inventory