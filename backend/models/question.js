const PostgresStore = require('../utils/PostgresStore.js');
class question {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${question.tableName}(
          id SERIAL PRIMARY KEY,
          description TEXT,
          classLevel TEXT,
          idmatiere INT,
          idsubject INT,
          FOREIGN KEY (idmatiere) REFERENCES matiere (id),
          FOREIGN KEY (idsubject) REFERENCES subject (id)
  
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${question.tableName}
      (description,classLevel ,idmatiere, idsubject) VALUES($1, $2, $3,$4)`,
      values: [json.description,json.classLevel,json.idmatiere, json.idsubject]
    });
  }
}
question.tableName = 'question';

module.exports = question
;
