const PostgresStore = require('../utils/PostgresStore.js');

class answer {
  static toSqlTable () {
    return ` 
        CREATE TABLE ${answer.tableName}(
        id SERIAL PRIMARY KEY,
        description TEXT,
        value BOOLEAN,
        idquestion INT,
        FOREIGN KEY (idquestion) REFERENCES question (id)

    )`;
  }

  static async insert (answers) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${answer.tableName}
      (description, value, idquestion) VALUES($1, $2, $3)`,
      values: [answers.description, answers.value, answers.idquestion]
    });
  }
}
answer.tableName = 'answer';

module.exports = answer
;
