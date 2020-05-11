const PostgresStore = require('../utils/PostgresStore.js');
class quizz {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${quizz.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          type TEXT,
          idquestion INT,
          idsubject INT,
          FOREIGN KEY (idquestion) REFERENCES question (id),
          FOREIGN KEY (idsubject) REFERENCES subject (id)
  
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${quizz.tableName}
      (name,type,idquestion,idsubject) VALUES($1, $2,$3,$4)`,
      values: [json.name, json.from,json.idquestion,json.idsubject]
    });
  }
}
quizz.tableName = 'quizz';

module.exports = quizz
;
