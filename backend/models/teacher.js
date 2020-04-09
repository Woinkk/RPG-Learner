// const PostgresStore = require('../utils/PostgresStore.js');
class teacher {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${teacher.tableName}(
          id SERIAL PRIMARY KEY,
          firstname TEXT,
          lastname TEXT,
          email TEXT,
          password TEXT,
          pseudo TEXT,
          idschool INT,
          FOREIGN KEY (idschool) REFERENCES school (id)
  
      )`;
  }
}
teacher.tableName = 'teacher';

module.exports = teacher
;
