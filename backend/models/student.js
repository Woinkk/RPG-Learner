// const PostgresStore = require('../utils/PostgresStore.js');
class student {
  static toSqlTable () {
    return ` 
          CREATE TABLE ${student.tableName}(
          id SERIAL PRIMARY KEY,
          firstname TEXT,
          lastname TEXT,
          email TEXT,
          password TEXT,
          pseudo TEXT,
          type TEXT,
          idclasses INT,
          FOREIGN KEY (idclasses) REFERENCES classes (id)
  
      )`;
  }

  static insertToStudent (json){
    const result = await PostGresStore.pool.query ({
      text : 
      `
      INSERT INTO ${student.tableName}
      (firstname,lastname,email,password,pseudo,type,idclasses)
      

      `,
      values: [json.firstname,json.lastname,json.email.json.password,json.pseudo,json.type,json.idclasses]
    });
    
  } 
}
student.tableName = 'student';

module.exports = student
;
