const PostgresStore = require('../utils/PostgresStore.js');
class teacher_class {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${teacher_class.tableName}(
          id SERIAL PRIMARY KEY,
          idteacher INT,
          idclasses INT,
          FOREIGN KEY (idteacher) REFERENCES teacher (id),
          FOREIGN KEY (idclasses) REFERENCES classes (id)
  
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${teacher_class.tableName}
        (idteacher,idclasses) VALUES($1,$2)`,
      values: [json.idteacher, json.idclasses]
    });
  }

  static async getClassByTeacher (TSession) {
    const result = await PostgresStore.pool.query({
      text: `SELECT idclasses FROM ${teacher_class.tableName}
      WHERE $1 = idteacher`,
      values: [TSession.userId]
    });
    return result;
  }
}
teacher_class.tableName = 'teacher_class';

module.exports = teacher_class
;
