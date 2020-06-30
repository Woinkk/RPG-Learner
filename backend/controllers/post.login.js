const Teacher = require('../models/teacher.js');
const Student = require('../models/student.js');
const School = require('../models/school.js');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postLogin (req, res) {
  // si l'utilisateur est déjà connecté, alors on lui retourne Unauthorized
  /*if (req.session.userId) {
    res.status(401)
      .send('Already authenticated');
    return;
  }*/
  const email = req.body.email;
  const password = req.body.password;

  // on vérifie l'email et le mot de passe de l'utilisateur
  const teacher = await Teacher.verifyTeacher(email, password);
  const student = await Student.verifyStudent(email, password);
  const school = await School.verifySchool(email,password);
  console.log(school)

  // si on a trouvé un utilisateur correspondant, alors on sauvegarde son ID
  // dans l'objet req.session
  if (teacher) {
    req.session.userId = teacher.id;
    req.session.whoIsConnected= "teacher";
    console.log(req.session);
    teacher.user = "teacher";
    res.json(teacher);
    return;
  }

  if (student) {
    req.session.userId = student.id;
    req.session.whoIsConnected = "student";
    const character = await Student.verifyStudentCharacter(student.id);
    student.type = character.rows[0].type;
    student.user = "student";
    res.json(student);
    return;
  }

  if(school) {
    req.session.userId = school.id;
    req.session.whoIsConnected = "school";
    school.user = "school";
    res.json(school);
    return;
  }
  // si on n'a pas trouvé d'utilisateur, alors on retourne une erreur 401 (unauthorized)
  res.status(401)
    .send('Unknown email or password');
}

module.exports = postLogin;
