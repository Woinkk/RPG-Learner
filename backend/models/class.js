// const PostgresStore = require('../utils/PostgresStore.js');
class classes {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${classes.tableName}(
          id SERIAL PRIMARY KEY,
          name VARCHAR(50),
          idschool INT,
          FOREIGN KEY (idschool) REFERENCES school (id)
  
      )`;
  }
}
classes.tableName = 'classes';

module.exports = classes
;
