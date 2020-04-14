const PostgresStore = require('../utils/PostgresStore.js');
class matiere {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${matiere.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          idteacher INT,
          FOREIGN KEY (idteacher) REFERENCES teacher (id)
  
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${matiere.tableName}
          (name,idteacher) VALUES($1,$2)`,
      values: [json.name,
        json.idteacher]
    });
  }
}
matiere.tableName = 'matiere';

module.exports = matiere
;
