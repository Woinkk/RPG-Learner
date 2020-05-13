
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postMyQuizzes (req, res) {
  const TSession = req.session;
  res.json(TSession);
}

module.exports = postMyQuizzes;
