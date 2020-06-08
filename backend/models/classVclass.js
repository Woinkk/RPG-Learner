const PostgresStore = require('../utils/PostgresStore.js');

class classVclass {

  static toSqlTable () {
    return ` 
          CREATE TABLE ${classVclass.tableName}(
          id SERIAL PRIMARY KEY,
          date TIMESTAMP,
          idclass1 INT,
          idclass2 INT,
          idmatiere INT,
          FOREIGN KEY (idclass1) REFERENCES classes (id),
          FOREIGN KEY (idclass2) REFERENCES classes (id),
          FOREIGN KEY (idmatiere) REFERENCES matiere (id)
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${classVclass.tableName}
            (date, idclass1,idclass2, idmatiere) VALUES($1, $2,$3,$4)
            `,
      values: [json.date,json.idclass1,json.idclass2,json.idmatiere]
    });
    return result;
  }

  static async create (idclass1, idclass2, date, matiere) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${classVclass.tableName}
            (idclass1,idclass2, date, idmatiere) VALUES($1, $2, $3, $4)
            `,
      values: [idclass1, idclass2, date, matiere]
    });

    const select = await PostgresStore.pool.query({
      text: `
            SELECT * FROM ${classVclass.tableName} ORDER BY id DESC LIMIT 1
            `,
      values: []
    });
    return select;
  }

  static async saveDate (id, date) {
    const result = await PostgresStore.pool.query({
      text: `
            UPDATE ${classVclass.tableName} SET date = $1 WHERE id = $2
            `,
      values: [date, id]
    })
  }

  static async deleteById (id) {
    const result = await PostgresStore.pool.query({
      text: `DELETE FROM ${classVclass.tableName}
      WHERE $1 = id`,
      values: [id]
    });
    return result;
  }

  static async selectMyClassVClass (idmatiere, idclass) {
    const select = await PostgresStore.pool.query({
      text: `
            SELECT * FROM ${classVclass.tableName} WHERE (idclass1 = $1 AND idmatiere = $2) OR (idclass2 = $1 AND idmatiere = $2)
            `,
      values: [idclass, idmatiere]
    });
    return select;
  }

  static async getClassVClassTime (id) {
    const select = await PostgresStore.pool.query({
      text: `
            SELECT date FROM ${classVclass.tableName} WHERE id = $1
            `,
      values: [id]
    });
    return select;
  }

  static async getClassesByClassVClassId (id) {
    const select = await PostgresStore.pool.query({
      text: `
            SELECT * FROM ${classVclass.tableName} WHERE id = $1
            `,
      values: [id]
    })
    return select;
  }
}
classVclass.tableName = 'classVclass';

module.exports = classVclass
;
