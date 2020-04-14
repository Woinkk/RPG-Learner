const PostgresStore = require('../utils/PostgresStore.js');
class teacher {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${teacher.tableName}(
          id SERIAL PRIMARY KEY,
          firstname TEXT,
          lastname TEXT,
          email TEXT,
          password TEXT,
          pseudo TEXT,
          idschool INT,
          FOREIGN KEY (idschool) REFERENCES school (id)
  
      )`;
  }

  static async insert (json) {
    await PostgresStore.pool.query({
      text: `INSERT INTO ${teacher.tableName}
              (firstname,
                lastname,
                email,
                password,
                pseudo,
                idschool) VALUES($1,$2,$3,$4,$5,$6)`,
      values: [json.firstname,
        json.lastname,
        json.email,
        json.password,
        json.pseudo,
        json.idschool

      ]
    });
  }
}
teacher.tableName = 'teacher';

module.exports = teacher
;
