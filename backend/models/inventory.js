// const PostgresStore = require('../utils/PostgresStore.js');
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
  static insertToInventory (json){
    const result = await PostGresStore.pool.query ({
      text : 
      `
      INSERT INTO ${inventory.tableName}
      (idstudent,iditem)
      VALUES (json.idstudent,json.iditem)
    
      `,
      values: [json.idstudent,json.iditem]
    })
    
  }
}
inventory.tableName = 'inventory';

module.exports = inventory
;
