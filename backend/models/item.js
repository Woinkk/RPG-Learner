const PostgresStore = require('../utils/PostgresStore.js');

class item {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${item.tableName}(
          id SERIAL PRIMARY KEY,
          name VARCHAR(50),
          effect TEXT
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text:
      `
      INSERT INTO ${item.tableName}
      (name,effect)
      VALUES($1,$2)

      `,
      values: [json.name, json.effect]
    });
    return result;
  }

  static async getItemById(idItem){
    const result = await PostgresStore.pool.query({
      text :`SELECT * FROM ${item.tableName}
      WHERE id = $1`,
      values:[idItem]
    })
    return result;

  }
  static async getIdItemByName(itemName){
    const result = await PostgresStore.pool.query({
      text:`SELECT * FROM ${item.tableName}
      WHERE name = $1
      `,
      values:[itemName]
    })
    return result;
  }
}

item.tableName = 'item';
module.exports = item
;
