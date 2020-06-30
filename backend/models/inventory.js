const PostgresStore = require('../utils/PostgresStore.js');

class inventory {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${inventory.tableName}(
          id SERIAL PRIMARY KEY,
          idstudent INT,
          iditem INT,
          quantity INT,
          FOREIGN KEY (idstudent) REFERENCES student (id),
          FOREIGN KEY (iditem) REFERENCES item (id)

  
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text:
      `
      INSERT INTO ${inventory.tableName}
      (idstudent,iditem,quantity)
      VALUES($1,$2,$3)
      `,
      values: [json.idstudent, json.iditem,json.quantity]
    });
    return result;
  }

  static async getInventoryByIdStudent(idStudent){
    const result = await PostgresStore.pool.query({
      text:`SELECT *  FROM ${inventory.tableName}
      WHERE idstudent = $1`,
      values:[idStudent]
    })
    return result
  }
  static async addItem (idStudent,idItem){
    const result = await PostgresStore.pool.query({
      text:`INSERT INTO ${inventory.tableName}
      (idsutdent,iditem)
      VALUES($1,$2)`,
      values:[idStudent,idItem]
      
    })
    return result;
  }
  static async checkQuantity(idStudent,idItem){
    const result = await PostgresStore.pool.query({
      text:`SELECT quantity FROM ${inventory.tableName}
      WHERE idstudent = $1 and iditem = $2`,
      values:[idStudent,idItem]
    })
    return result

  }
  static async useItem(quantity,idStudent,idItem){
    const result =await PostgresStore.pool.query({
      text:`UPDATE ${inventory.tableName}
      SET quantity =$1
      WHERE idstudent = $2 and iditem = $3 `,
      values:[quantity,idStudent,idItem]
    })

  }
}
inventory.tableName = 'inventory';

module.exports = inventory
;
