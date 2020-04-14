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

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${answer.tableName}
      (description, value, idquestion) VALUES($1, $2, $3)`,
      values: [json.description, json.value, json.idquestion]
    });
  }
}
answer.tableName = 'answer';

module.exports = answer
;
