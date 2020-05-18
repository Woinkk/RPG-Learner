const PostgresStore = require('../utils/PostgresStore.js');
class question {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${question.tableName}(
          id SERIAL PRIMARY KEY,
          question TEXT,
          reponse1 TEXT,
          reponse2 TEXT,
          reponse3 TEXT,
          reponse4 TEXT,
          good INT,
          idquizz INT,
          FOREIGN KEY (idquizz) REFERENCES quizz (id)
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${question.tableName}
      (question,reponse1 ,reponse2, reponse3, reponse4, good, idquizz) VALUES($1, $2, $3,$4,$5,$6,$7)`,
      values: [json.question, json.reponse1, json.reponse2, json.reponse3, json.reponse4, json.good, json.idquizz]
    });
  }

  static async getQuestionsByQuizz (id) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${question.tableName}
            WHERE idquizz = $1 
    `,
      values: [id]
    });
    return result;
  }
}
question.tableName = 'question';

module.exports = question
;
