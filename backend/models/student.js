// const PostgresStore = require('../utils/PostgresStore.js');
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
}
student.tableName = 'student';

module.exports = student
;
