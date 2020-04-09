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
      

      `,
      values: [json.name,json.effect]
    });

}
item.tableName = 'item';

module.exports = item
;
