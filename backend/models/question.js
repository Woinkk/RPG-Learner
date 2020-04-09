// const PostgresStore = require('../utils/PostgresStore.js');
class question {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${question.tableName}(
          id SERIAL PRIMARY KEY,
          description TEXT,
          idmatiere INT,
          idsubject INT,
          FOREIGN KEY (idmatiere) REFERENCES matiere (id),
          FOREIGN KEY (idsubject) REFERENCES subject (id)
  
      )`;
  }
}
question.tableName = 'question';

module.exports = question
;
