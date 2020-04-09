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
}
item.tableName = 'item';

module.exports = item
;
