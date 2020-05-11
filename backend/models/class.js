const PostgresStore = require('../utils/PostgresStore.js');

class classes {
  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${classes.tableName}
            (name, idschool) VALUES($1, $2)
            `,
      values: [json.name, json.idschool]
    });
    return result;
  }

  static toSqlTable () {
    return ` 
          CREATE TABLE ${classes.tableName}(
          id SERIAL PRIMARY KEY,
          name VARCHAR(50),
          idschool INT,
          FOREIGN KEY (idschool) REFERENCES school (id)
  
      )`;
  }

  static async getClassById (id) {
    const result = await PostgresStore.pool.query({
      text: `SELECT name FROM ${classes.tableName}
      WHERE $1 = id`,
      values: [id]
    });
    return result;
  }

  static async getAllClasses () {
    const result = await PostgresStore.pool.query({
      text: `SELECT name FROM ${classes.tableName}`,
      values: []
    });
    return result;
  }
}
classes.tableName = 'classes';

module.exports = classes
;
