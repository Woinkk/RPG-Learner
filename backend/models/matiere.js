// const PostgresStore = require('../utils/PostgresStore.js');
class matiere {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${matiere.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          idteacher INT,
          idclasses INT,
          FOREIGN KEY (idclasses) REFERENCES classes (id),
          FOREIGN KEY (idteacher) REFERENCES teacher (id)
  
      )`;
  }
}
matiere.tableName = 'matiere';

module.exports = matiere
;
