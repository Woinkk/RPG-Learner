// const PostgresStore = require('../utils/PostgresStore.js');
class school {
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
