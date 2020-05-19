const Subject = require('../models/subject.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function putCreateSubject(req, res) {
const TSession = req.session;
const body = req.body;

console.log("BODY:",body);

const verify = await Subject.verifysubject(body);

console.log(verify);

if (verify === false) {
    const insert = body.subject
    console.log(insert);
    console.log(await Subject.insert({name: body.subject, idteacher: TSession.userId}))
    res.sendStatus(200);
} else {
    res.sendStatus(500);
}

}

module.exports = putCreateSubject;