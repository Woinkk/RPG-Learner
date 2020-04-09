// const PostgresStore = require('../utils/PostgresStore.js');
class result {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${result.tableName}(
          id SERIAL PRIMARY KEY,
          goodanswers INT,
          idstudent INT,
          idquizz INT,
          FOREIGN KEY (idstudent) REFERENCES student (id),
          FOREIGN KEY (idquizz) REFERENCES quizz (id)
  
      )`;
  }
}
result.tableName = 'result';

module.exports = result
;
