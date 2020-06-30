const PostgresStore = require('../utils/PostgresStore.js');
const bcrypt = require('bcrypt');

class school {
  static async insert (json) {
    const hashedPassword = await bcrypt.hash(json.password, 10);
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${school.tableName}
            (name, adress, email, password) VALUES($1, $2, $3, $4)
            `,
      values: [json.name, json.adress, json.email, hashedPassword]
    });
    return result;
  }

  static toSqlTable () {
    return ` 
          CREATE TABLE ${school.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          adress TEXT,
          email TEXT,
          password TEXT
      )`;
  }
  static async verifySchool (mail, password) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${school.tableName}
            WHERE email like $1 
    `,
      values: [mail]
    });
    console.log(result.rows)
    if (result.rows.length === 0) {
      return null;
    }
    const currentPassword = result.rows[0].password;

    const isSame = await bcrypt.compare(password, currentPassword);
    if (isSame) {
      console.log('gg');
      const school = result.rows[0];
      delete school.password;
      return school;
    } else {
      console.log('pas gg');
      return null;
    }
  }
  static async getIdSchoolByemail(email){
    const result = await PostgresStore.pool.query({
      text:`SELECT id FROM ${school.tableName}
      WHERE email like $1`,
      values:[email]
    })
    return result;
  }
}
school.tableName = 'school';

module.exports = school
;
