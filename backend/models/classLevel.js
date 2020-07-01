const PostgresStore = require('../utils/PostgresStore.js');

class classLevel {

  static toSqlTable () {
    return ` 
          CREATE TABLE ${classLevel.tableName}(
          id SERIAL PRIMARY KEY,
          level TEXT 
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${classLevel.tableName}
            (level) VALUES($1)
            `,
      values: [json.level]
    });
    return result;
  }

  static async getLevelById (idClassLevel) {
    const result = await PostgresStore.pool.query({
      text: `SELECT level FROM ${classLevel.tableName}
      WHERE id = $1`,
      values: [idClassLevel]
    });
    return result.rows;
  }

}
classLevel.tableName = 'classLevel';

module.exports = classLevel
