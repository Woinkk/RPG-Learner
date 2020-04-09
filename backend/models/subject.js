// const PostgresStore = require('../utils/PostgresStore.js');
class subject {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${subject.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT
          
      )`;
  }
}
subject.tableName = 'subject';

module.exports = subject
;
