const Inventory = require("../models/inventory.js")
const Item = require("../models/item.js")


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */



async function useItem(req, res) {
    if (req.session.userId && req.session.whoIsConnected === "student") {
        let idStudent = req.session.userId;
        let itemName = req.body.itemName
        const getItem = await Item.getIdItemByName(itemName)
        for (let i = 0; i < getItem.rows.length; i++) {
            const checkQuantity = await Inventory.checkQuantity(idStudent, getitem.rows[i].iditem)
            for (let i = 0; i < checkQuantity.rows.length; i++) {
                if (checkQuantity.rows[i] < 0) {
                    const useItem = await Inventory.useItem(checkQuantity.rows[i] - 1, idStudent, getitem.rows[i].iditem)
                    if (useItem) {
                        res.json(useItem)
                        return
                    }
                }
            }

        }
        res.status(401)
            .send('Error;');

    }
    res.status(401)
        .send('Not connected or not student;');
    // useItem
}

/* const checkQuantity = await Inventory.checkQuantity(idStudent,getInventory.rows[i].iditem)
               if (checkQuantity){
                   for (let i = 0 ; i < checkQuantity.rows.length ; i++){
                       prop.quantity=checkQuantity.rows[i].quantity
                   }
                   
               }*/

module.exports = useItem