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
    const result = await PostgresStore.pool.query({
      text: `INSERT INTO ${subject.tableName}
        (name, idteacher) VALUES($1, $2)`,
      values: [json.name, json.idteacher]
    });

    console.log("result of the insert ", result);
  }

  static async verifysubject (json) {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${subject.tableName} WHERE name = $1`,
      values: [json.subject]
    });

    console.log(json.subject);

    console.log(result);

    if(result.rows.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  static async getAll () {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${subject.tableName}`
    });

    return result.rows;
  }

  static async getId (subjectName) {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${subject.tableName} WHERE name = $1`,
      values: [subjectName]
    });

    return result.rows;
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
