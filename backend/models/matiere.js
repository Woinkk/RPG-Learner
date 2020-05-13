const PostgresStore = require('../utils/PostgresStore.js');
class matiere {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${matiere.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${matiere.tableName}
          (name) VALUES($1)`,
      values: [json.name]
    });
  }
}
matiere.tableName = 'matiere';

module.exports = matiere
;
