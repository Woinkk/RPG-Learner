const PostgresStore = require('../utils/PostgresStore.js');
const bcrypt = require('bcrypt');

class student {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${student.tableName}(
          id SERIAL PRIMARY KEY,
          firstname TEXT,
          lastname TEXT,
          email TEXT,
          password TEXT,
          pseudo TEXT,
          type TEXT,
          idclasses INT,
          FOREIGN KEY (idclasses) REFERENCES classes (id)
  
      )`;
  }

  static async insert (json) {
    const hashedPassword = await bcrypt.hash(json.password, 10);
    const result = await PostgresStore.pool.query({
      text:
        `
      INSERT INTO ${student.tableName}
      (firstname,lastname,email,password,pseudo,type,idclasses)
      VALUES($1,$2,$3,$4,$5,$6,$7)      

      `,
      values: [json.firstname, json.lastname, json.email, hashedPassword, json.pseudo, json.type, json.idclasses]
    });
    return result;
  }

  static async verifyStudent (mail, password) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${student.tableName}
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
      const student = result.rows[0];
      delete student.password;
      return student;
    } else {
      console.log('pas gg');
      return null;
    }
  }
}
student.tableName = 'student';

module.exports = student;
