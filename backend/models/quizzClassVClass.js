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
  static async deleteByClassVClassId (id) {
    const result = await PostgresStore.pool.query({
      text: `DELETE FROM ${quizzClassVClass.tableName}
      WHERE $1 = idclassVClass`,
      values: [id]
    });
    return result;
  }

  static async addingQuizz(idclassVClass, idquizz) {
      const resp = await PostgresStore.pool.query({
        text: `INSERT INTO ${quizzClassVClass.tableName}
        (idquizz, idclassVClass) VALUES($1, $2)`,
        values: [idquizz, idclassVClass]
      });
      return resp;
  }

  static async getQuizzByClassVClassId(id) {
    const resp = await PostgresStore.pool.query({
      text: `SELECT * FROM ${quizzClassVClass.tableName}
      WHERE idclassVClass = $1`,
      values: [id]
    });
    return resp;
  }
}
quizzClassVClass.tableName = 'quizzClassVClass';

module.exports = quizzClassVClass
;
