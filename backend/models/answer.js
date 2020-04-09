// const PostgresStore = require('../utils/PostgresStore.js');

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
}
answer.tableName = 'answer';

module.exports = answer
;
