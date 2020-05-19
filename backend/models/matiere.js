const PostgresStore = require('../utils/PostgresStore.js');
class matiere {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${matiere.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${matiere.tableName}
          (name) VALUES($1)`,
      values: [json.name]
    });
  }

  static async getAll () {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${matiere.tableName}`
    });

    return result.rows;
  }

  static async getId (matiereName) {
    const result = await PostgresStore.pool.query({
      text: `SELECT id FROM ${matiere.tableName} WHERE name  = $1`,
      values: [matiereName]
    });

    return result.rows;
  }

  static async getNameById (idTeacher) {
    const result = await PostgresStore.pool.query({
      text: `SELECT name FROM ${matiere.tableName} WHERE id = $1`,
      values: [idTeacher]
    });

    return result.rows;
  }
}
matiere.tableName = 'matiere';

module.exports = matiere
;
