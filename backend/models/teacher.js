const PostgresStore = require('../utils/PostgresStore.js');
const bcrypt = require('bcrypt');

class teacher {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${teacher.tableName}(
          id SERIAL PRIMARY KEY,
          firstname TEXT,
          lastname TEXT,
          email TEXT,
          password TEXT,
          pseudo TEXT,
          idschool INT,
          idmatiere INT,
          FOREIGN KEY (idschool) REFERENCES school (id),
          FOREIGN KEY (idmatiere) REFERENCES matiere (id)
      )`;
  }

  static async insert (json) {
    const hashedPassword = await bcrypt.hash(json.password, 10);
    await PostgresStore.pool.query({
      text: `INSERT INTO ${teacher.tableName}
              (firstname,
                lastname,
                email,
                password,
                pseudo,
                idschool,
                idmatiere) VALUES($1,$2,$3,$4,$5,$6,$7)`,
      values: [json.firstname,
        json.lastname,
        json.email,
        hashedPassword,
        json.pseudo,
        json.idschool,
        json.idmatiere
      ]
    });
  }

  static async getTeacherById (id) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${teacher.tableName}
            WHERE id = $1 
    `,
      values: [id]
    });
    return result;
  }

  static async verifyTeacher (mail, password) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${teacher.tableName}
            WHERE email like $1 
    `,
      values: [mail]
    });
    if (result.rows.length === 0) {
      return null;
    }

    const currentPassword = result.rows[0].password;

    const isSame = await bcrypt.compare(password, currentPassword);
    if (isSame) {
      console.log('gg');
      const teacher = result.rows[0];
      delete teacher.password;
      return teacher;
    } else {
      console.log('pas gg');
      return null;
    }
  }

  static async getMatiereIdByTeacher (userId) {
    const result = await PostgresStore.pool.query({
      text: `SELECT idmatiere FROM ${teacher.tableName} where id = $1`,
      values: [userId]
    });

    return result.rows;
  }

  static async getMatiereNameByTeacher (TeacherId) {
    const result = await PostgresStore.pool.query({
      text: `SELECT M.name FROM ${teacher.tableName} AS T
      JOIN matiere AS M
      ON T.idmatiere = M.id
      where T.id = $1`,
      values: [TeacherId]
    });

    return result.rows;
  }
}

teacher.tableName = 'teacher';

module.exports = teacher
;
