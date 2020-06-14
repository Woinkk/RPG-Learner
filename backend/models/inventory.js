const PostgresStore = require('../utils/PostgresStore.js');

class inventory {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${inventory.tableName}(
          id SERIAL PRIMARY KEY,
          idstudent INT,
          iditem INT,
          FOREIGN KEY (idstudent) REFERENCES student (id),
          FOREIGN KEY (iditem) REFERENCES item (id)

  
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text:
      `
      INSERT INTO ${inventory.tableName}
      (idstudent,iditem)
      VALUES($1,$2)
      `,
      values: [json.idstudent, json.iditem]
    });
    return result;
  }

  static async inventory(idStudent){
    const result = await PostgresStore.pool.query({
      text:`SELECT * FROM ${inventory.tableName}
      WHERE idstudent = $1`,
      value:[idstudent]
    })
    return result
  }
}
inventory.tableName = 'inventory';

module.exports = inventory
;
