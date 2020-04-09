// const PostgresStore = require('../utils/PostgresStore.js');
class quizz {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${quizz.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          idquestion INT,
          FOREIGN KEY (idquestion) REFERENCES question (id)
  
      )`;
  }
}
quizz.tableName = 'quizz';

module.exports = quizz
;
