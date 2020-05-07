/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function postClassVClass (req, res) {
  if (req.body.selectedMyClasses === null || req.body.selectedAllClasses === null ||
        (req.body.selectedMyClasses === req.body.selectedAllClasses)) {
    res.status(401)
      .send('Null or same selected');
  }

  req.session.myClass = req.body.selectedMyClasses;
  req.session.otherClass = req.body.selectedAllClasses;

  res.status(200)
    .send('All good');
}

module.exports = postClassVClass;
