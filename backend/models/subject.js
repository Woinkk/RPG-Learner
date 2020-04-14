const PostgresStore = require('../utils/PostgresStore.js');
class subject {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${subject.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT
          
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${subject.tableName}
        (name) VALUES($1)`,
      values: [json.name]
    });
  }
}
subject.tableName = 'subject';

module.exports = subject
;
