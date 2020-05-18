const PostgresStore = require('../utils/PostgresStore.js');
class quizz {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${quizz.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          idsubject INT,
          idteacher INT,
          FOREIGN KEY (idsubject) REFERENCES subject (id),
          FOREIGN KEY (idteacher) REFERENCES teacher (id)
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${quizz.tableName}
      (name,idsubject,idteacher) VALUES($1, $2,$3)`,
      values: [json.name, json.idsubject, json.idteacher]
    });
  }

  static async getAllQuizzes () {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${quizz.tableName}`,
      values: []
    });
    return result;
  }
}
quizz.tableName = 'quizz';

module.exports = quizz
;
