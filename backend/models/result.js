const PostgresStore = require('../utils/PostgresStore.js');

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

  static async insert (json) {
    const results = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${result.tableName}
            (goodanswers, idstudent, idquizz) VALUES($1, $2, $3)
            `,
      values: [json.goodanswers, json.idstudent, json.idquizz]
    });
    return results;
  }
}
result.tableName = 'result';

module.exports = result
;
