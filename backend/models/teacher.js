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
          FOREIGN KEY (idschool) REFERENCES school (id)
  
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
                idschool) VALUES($1,$2,$3,$4,$5,$6)`,
      values: [json.firstname,
        json.lastname,
        json.email,
        hashedPassword,
        json.pseudo,
        json.idschool

      ]
    });
  }

  static async verifyTeacher (mail, password) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${teacher.tableName}
            WHERE email like $1 
    `,
      values: [mail]
    });
    console.log(result);
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
}

teacher.tableName = 'teacher';

module.exports = teacher
;
