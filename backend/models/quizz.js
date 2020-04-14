const PostgresStore = require('../utils/PostgresStore.js');
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

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${quizz.tableName}
      (name, idquestion) VALUES($1, $2)`,
      values: [json.description, json.idquestion]
    });
  }
}
quizz.tableName = 'quizz';

module.exports = quizz
;
