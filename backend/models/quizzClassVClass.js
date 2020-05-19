const PostgresStore = require('../utils/PostgresStore.js');
class quizzClassVClass {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${quizzClassVClass.tableName}(
          id SERIAL PRIMARY KEY,
          idquizz INT,
          idclassVClass INT,
          FOREIGN KEY (idclassVClass) REFERENCES classVClass (id),
          FOREIGN KEY (idquizz) REFERENCES quizz (id)
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${quizzClassVClass.tableName}
      (idquizz, idclassVClass) VALUES($1, $2)`,
      values: [json.idquizz, json.idclassVClass]
    });
  }
}
quizzClassVClass.tableName = 'quizzClassVClass';

module.exports = quizzClassVClass
;
