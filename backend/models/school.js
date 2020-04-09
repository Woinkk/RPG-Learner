const PostgresStore = require('../utils/PostgresStore.js');

class school {
  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${school.tableName}
            (name, adress, email, password) VALUES($1, $2, $3, $4)
            `,
      values: [json.name, json.adress, json.email, json.password]
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
}
school.tableName = 'school';

module.exports = school
;
