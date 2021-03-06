const PostgresStore = require('../utils/PostgresStore.js');

class classes {

  static toSqlTable () {
    return ` 
          CREATE TABLE ${classes.tableName}(
          id SERIAL PRIMARY KEY,
          name VARCHAR(50),
          idschool INT,
          idclassLevel INT,
          FOREIGN KEY (idschool) REFERENCES school (id),
          FOREIGN KEY (idclassLevel) REFERENCES classLevel (id)
      )`;
  }

  static async insert (json) {
    const result = await PostgresStore.pool.query({
      text: `
            INSERT INTO ${classes.tableName}
            (name, idschool, idclassLevel) VALUES($1, $2, $3)
            `,
      values: [json.name, json.idschool, json.idclassLevel]
    });
    return result;
  }

  static async getIdByName(name) {
    const result = await PostgresStore.pool.query({
      text: `SELECT id FROM ${classes.tableName}
      WHERE $1 = name`,
      values: [name]
    });
    return result;
  }

  static async getClassById (id) {
    const result = await PostgresStore.pool.query({
      text: `SELECT name FROM ${classes.tableName}
      WHERE $1 = id`,
      values: [id]
    });
    return result;
  }
  static async getIdClassByName(name){
    const result = await PostgresStore.pool.query({
      text:`SELECT id FROM ${classes.tableName}
      WHERE name like $1`,
      values:[name]
    })
    return result;
  }
  static async getAllClasses () {
    const result = await PostgresStore.pool.query({
      text: `SELECT name FROM ${classes.tableName}`,
      values: []
    });
    return result;
  }

  static async getIdClassLevel (idClass) {
    const result = await PostgresStore.pool.query({
      text: `SELECT idclasslevel FROM ${classes.tableName} 
      WHERE id = $1`,
      values: [idClass]
    });
    return result.rows;
  }
  
}
classes.tableName = 'classes';

module.exports = classes
;
