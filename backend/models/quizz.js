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
    const result = await PostgresStore.pool.query({
      text: `INSERT INTO ${quizz.tableName}
      (name,idsubject,idteacher) VALUES($1, $2,$3) RETURNING id`,
      values: [json.name, json.idsubject, json.idteacher]
    });

    return result.rows;
  }

   static async getAll () {
     const result = await PostgresStore.pool.query({
       text: `SELECT * FROM ${quizz.tableName}`
     });

     return result.rows;
   }

   static async getById (idQuizz) {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${quizz.tableName}
      WHERE id = $1`,
      values: [idQuizz]
    });

    return result.rows;
  }

   static async delete (idQuizz) {
    const result = await PostgresStore.pool.query({
      text: `DELETE FROM ${quizz.tableName}
      WHERE id = $1`,
      values: [idQuizz]
    });

    return result.rows;
  }

  static async updateByIdQuizz (json) {
    const result = await PostgresStore.pool.query({
      text: `UPDATE ${quizz.tableName}
      SET name = $1
      WHERE id = $2`,
      values: [json.name, json.idQuizz]
    });

    return result.rows;
  }

  // static async getQuizzByIdTeacher (userId) {
  //   const result = await PostgresStore.pool.query({
  //     text: `SELECT Q.name AS QuizzName, S.name AS SubjectName, M.name AS MatiereName FROM ${quizz.tableName} AS Q
  //     JOIN subject AS S
  //     ON Q.idteacher = S.idteacher 
  //     JOIN teacher AS T
  //     ON S.idteacher = T.id
  //     JOIN matiere AS M
  //     ON T.idmatiere = M.id
  //     WHERE Q.idteacher = $1`,
  //     values: [userId]
  //   });

  //   return result;
  // }
}
quizz.tableName = 'quizz';

module.exports = quizz
;
