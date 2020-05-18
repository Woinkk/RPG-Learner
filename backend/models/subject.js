const PostgresStore = require('../utils/PostgresStore.js');
class subject {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${subject.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          idteacher INT,
          FOREIGN KEY (idteacher) REFERENCES teacher (id)
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${subject.tableName}
        (name, idteacher) VALUES($1, $2)`,
      values: [json.name, json.idteacher]
    });
  }

  static async getSubjectById (id) {
    const result = await PostgresStore.pool.query({
      text: ` SELECT * FROM ${subject.tableName}
            WHERE id = $1 
    `,
      values: [id]
    });
    return result;
  }
}
subject.tableName = 'subject';

module.exports = subject
;
