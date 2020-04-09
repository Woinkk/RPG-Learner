// const PostgresStore = require('../utils/PostgresStore.js');

class item {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${item.tableName}(
          id SERIAL PRIMARY KEY,
          name VARCHAR(50),
          effect TEXT
      )`;
  }
  static insertToItem (json){
    const result = await PostGresStore.pool.query ({
      text : 
      `
      INSERT INTO ${item.tableName}
      (name,effect)
      VALUES($1,$2)

      `,
      values: [json.name,json.effect]
    });
    return result;
  }
}

item.tableName = 'item';
module.exports = item
;
