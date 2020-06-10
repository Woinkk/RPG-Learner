const PostgresStore = require('../utils/PostgresStore.js');
class quizz {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${quizz.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          classlevel TEXT,
          idsubject INT,
          idteacher INT,
          FOREIGN KEY (idsubject) REFERENCES subject (id),
          FOREIGN KEY (idteacher) REFERENCES teacher (id)
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `INSERT INTO ${quizz.tableName}
      (name,classlevel,idsubject,idteacher) VALUES($1,$2,$3,$4) RETURNING id`,
      values: [json.name, json.classlevel, json.idsubject, json.idteacher]
    });

    return result.rows;
  }

   static async getAll () {
     const result = await PostgresStore.pool.query({
       text: `SELECT * FROM ${quizz.tableName}`
     });

     return result.rows;
   }

  static async getAllQuizzes() {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${quizz.tableName}`
    });
    return result;
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
      SET (name, classlevel) = ($1, $2)
      WHERE id = $3`,
      values: [json.name, json.classLevel, json.idQuizz]
    });

    return result.rows;
  }

   static async getQuizzByIdTeacher (userId) {
     const result = await PostgresStore.pool.query({
       text: `SELECT * FROM ${quizz.tableName} 
       WHERE idteacher = $1`,
       values: [userId]
     });

     return result.rows;
   }

   static async byIdTeacherIfStudentHasIt (quizzId, teacherId) {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${quizz.tableName} 
      WHERE id = $1 AND idteacher = $2`,
      values: [quizzId, teacherId]
    });
    return result;
  }
}
quizz.tableName = 'quizz';

module.exports = quizz
;
