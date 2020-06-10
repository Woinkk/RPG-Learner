const PostgresStore = require('../utils/PostgresStore.js');

class stats {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${stats.tableName}(
          id SERIAL PRIMARY KEY,
          pointdevie INT,
          experience INT,
          vitesse INT,
          force INT,
          pointdecompetence INT,
          idstudent INT,
          FOREIGN KEY (idstudent) REFERENCES student (id)
  
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text:
        `
      INSERT INTO ${stats.tableName}
      (pointdevie, experience, vitesse, force, pointdecompetence, idstudent)
      VALUES($1,$2,$3,$4,$5,$6)
      `,
      values: [json.pointdevie, json.experience, json.vitesse, json.force, json.pointdecompetence, json.idstudent]
    });
    return result;
  }
}
stats.tableName = 'stats';

module.exports = stats;
