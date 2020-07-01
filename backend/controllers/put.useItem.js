const Inventory = require("../models/inventory.js")
const Item = require("../models/item.js")


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */



async function useItem(req, res) {
    console.log("req", req.body.itemName)
    if (req.session.userId && req.session.whoIsConnected === "student") {
        let idStudent = req.session.userId;
        let itemName = req.body.itemName
        const getItem = await Item.getIdItemByName(itemName)
        if (getItem) {
            console.log("getItem", getItem.rows);
            const checkQuantity = await Inventory.checkQuantity(idStudent, getItem.rows[0].id)
            console.log("quantity", checkQuantity.rows[0].quantity)
            if (checkQuantity.rows[0].quantity > 0) {
                const req = await Inventory.useItem(checkQuantity.rows[0].quantity - 1, idStudent, getItem.rows[0].id)
                console.log("USEEEED", req)
                res.json(null)
            } else {
                const req =await Inventory.deleteItem(idStudent, getItem.rows[0].id)
                console.log("DELETED",req)
                res.json({command:"DELETE"})
            }

        }
        
        return

    }

    res.status(401)
        .send('Error;');

}

/* const checkQuantity = await Inventory.checkQuantity(idStudent,getInventory.rows[i].iditem)
               if (checkQuantity){
                   for (let i = 0 ; i < checkQuantity.rows.length ; i++){
                       prop.quantity=checkQuantity.rows[i].quantity
                   }
                   
               }*/

module.exports = useItem