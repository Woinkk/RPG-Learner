const ClassVClass = require('../models/classVclass.js');
const quizzClassVClass = require('../models/quizzClassVClass.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postSavingClassVClass (req, res) {
    const pickerDate = req.body.pickerDate;
    const pickerTime = req.body.pickerTime;
    const id = req.session.classVClass;

    const response = await quizzClassVClass.deleteByClassVClassId(id);
    for(let i = 0; i < req.body.quizzList.length; i++) {
        var addingQuizz = await quizzClassVClass.addingQuizz(id, req.body.quizzList[i].id);
    }

    if(pickerDate === null || pickerTime === null && pickerDate !== pickerTime) {
        res.status(202)
            .send('No correct time set');
    } else {
        var date = pickerDate +" "+ pickerTime +":00";
        const rep = await ClassVClass.saveDate(id, date);
        res.status(200)
            .send('Everything is fine');
    }
}

module.exports = postSavingClassVClass;