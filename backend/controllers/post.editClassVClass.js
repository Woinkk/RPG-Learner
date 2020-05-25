/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postEditClassVClass (req, res) {
    if(req.body.id !== null) {
        req.session.classVClass = req.body.id;
        req.session.editClassVClass = true;
        res.status(200)
            .send('All good.');
    } else {
        res.status(404)
            .send('ClassVClass not found.');
    }
}

module.exports = postEditClassVClass;