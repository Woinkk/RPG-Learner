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

  static async create (answer) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${answer.tableName}
      (description, value, idquestion) VALUES($1, $2, $3)`,
      values: [answer.description, answer.value, answer.idquestion]
    });
  }
}
answer.tableName = 'answer';

module.exports = answer
;
