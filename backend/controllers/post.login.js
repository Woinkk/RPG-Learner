const Teacher = require('../models/teacher.js');
const Student = require('../models/student.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postLogin (req, res) {
  // si l'utilisateur est déjà connecté, alors on lui retourne Unauthorized
  if (req.session.userId) {
    res.status(401)
      .send('Already authenticated');
    return;
  }
  const email = req.body.email;
  const password = req.body.password;

  // on vérifie l'email et le mot de passe de l'utilisateur
  const teacher = await Teacher.verifyTeacher(email, password);
  const student = await Student.verifyStudent(email, password);
  // si on a trouvé un utilisateur correspondant, alors on sauvegarde son ID
  // dans l'objet req.session
  if (teacher) {
    req.session.userId = teacher.id;
    res.json(teacher);
    return;
  }

  if (student) {
    req.session.userId = student.id;
    res.json(student);
    return;
  }
  // si on n'a pas trouvé d'utilisateur, alors on retourne une erreur 401 (unauthorized)
  res.status(401)
    .send('Unknown email or password');
}

module.exports = postLogin;
