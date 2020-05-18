const PostgresStore = require('../utils/PostgresStore.js');

class classVclass {

  static toSqlTable () {
    return ` 
          CREATE TABLE ${classVclass.tableName}(
          id SERIAL PRIMARY KEY,
          idclass1 INT,
          idclass2 INT,
          date TIMESTAMP,
          FOREIGN KEY (idclass1) REFERENCES classes (id),
          FOREIGN KEY (idclass2) REFERENCES classes (id)
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${classVclass.tableName}
            (idclass1,idclass2,date) VALUES($1, $2,$3)
            `,
      values: [json.idclass1,json.idclass2,json.date]
    });
    return result;
  }

  static async create (idclass1, idclass2, date, list) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${classVclass.tableName}
            (idclass1,idclass2, date) VALUES($1, $2, $3)
            `,
      values: [idclass1, idclass2, date]
    });
    return result;
  }
}
classVclass.tableName = 'classVclass';

module.exports = classVclass
;
