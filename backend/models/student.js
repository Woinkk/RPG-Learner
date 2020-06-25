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
      (firstname,lastname,email,password,pseudo,idclasses)
      VALUES($1,$2,$3,$4,$5,$6)      

      `,
      values: [json.firstname, json.lastname, json.email, hashedPassword, json.pseudo, json.idclasses]
    });
    return result;
  }

  static async insertAccountNewStudent (newStudent){
    const hashedPassword = await bcrypt.hash(newStudent.password,10)
    const result = await PostgresStore.pool.query({
      text: `INSERT INTO ${student.tableName}
      (firstname,lastname,email,password,idclasses)
      VALUES($1,$2,$3,$4,$5)
      `,
      values:[newStudent.firstname,newStudent.lastname,newStudent.email,hashedPassword,newStudent.idclasses]
    })
    return result;
  }

  static async insertCharacter(idStudent,character){
    const result = await PostgresStore.pool.query({
      text: `UPDATE INTO ${student.tableName}
      (type)
      VALUES($1)
      WHERE  id = $2
      `,
      values:[character,idStudent]
    })
  }

  static async getStudentsByClasses (idclasses) {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${student.tableName}
      WHERE $1 = idclasses`,
      values: [idclasses]
    });
    return result;
  }

  static async checkAddStudent (mail) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${student.tableName}
            WHERE email like $1 
    `,
      values: [mail]
    });
    return result;
  }

  static async verifyStudentCharacter (idStudent){
    const result = await PostgresStore.pool.query({
        text: `SELECT type FROM ${student.tableName}
              WHERE id = $1`,
              values:[idStudent]
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


  static async modifyStudentPassword(modifyProp,mail){
    const hashedPassword = await bcrypt.hash(modifyProp.password, 10);
    const result = await PostgresStore.pool.query({
      text:`UPDATE ${teacher.tableName}
      SET password =$1
      WHERE email like $2
      `,
      values:[hashedPassword,mail]
    })
    return result
  }
  


  static async getEmailById(id){
    const result = await PostgresStore.pool.query({
      text:`SELECT email FROM ${teacher.tableName}
      WHERE id = $1`,
      values:[id]
    })
    return result
  }
}
student.tableName = 'student';

module.exports = student;
