const PostgresStore = require('../utils/PostgresStore.js');
class matiere {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${matiere.tableName}(
          id SERIAL PRIMARY KEY,
          name TEXT,
          idteacher INT,
          idclasses INT,
          FOREIGN KEY (idclasses) REFERENCES classes (id),
          FOREIGN KEY (idteacher) REFERENCES teacher (id)
  
      )`;
  }

  static async insert (matieres) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${matiere.tableName}
          (name,
            idteacher,
            idclasses) VALUES($1,$2,$3)`,
      values: [matieres.name,
        matieres.idteacher,
        matieres.idclasses]
    });
  }
}
matiere.tableName = 'matiere';

module.exports = matiere
;
