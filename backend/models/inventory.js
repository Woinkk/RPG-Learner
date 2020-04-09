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
}
inventory.tableName = 'inventory';

module.exports = inventory
;
