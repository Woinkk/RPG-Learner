const PostgresStore = require('../utils/PostgresStore.js');

class answerStudent {

  static toSqlTable () {
    return ` 
          CREATE TABLE ${answerStudent.tableName}(
          id SERIAL PRIMARY KEY,
          answer INT,
          type TEXT,
          idstudent INT,
          idquestion INT,
          FOREIGN KEY (idstudent) REFERENCES student (id),
          FOREIGN KEY (idquestion) REFERENCES question (id)
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${answerStudent.tableName}
            (answer, type, idstudent, idquestion) VALUES($1, $2, $3, $4)
            `,
      values: [json.answer,json.type,json.idstudent,json.idquestion]
    });
    return result;
  }

  static async deleteByIdQuestion (idquestion) {
    const result = await PostgresStore.pool.query({
      text: `
            DELETE FROM ${answerStudent.tableName}
            WHERE idquestion = $1`,
      values: [idquestion]
    });
    return result;
  }
}
answerStudent.tableName = 'answerStudent';

module.exports = answerStudent
;
