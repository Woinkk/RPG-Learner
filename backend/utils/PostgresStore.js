const pg = require('pg');
const config = require('../server.config.js');
const pgtools = require('pgtools')
;

class PostgresStore {
  async init () {
    this.pool = new pg.Pool(config.postgres);
    this.client = await this.pool.connect();
  }

  close () {
    if (this.client) this.client.release();
    this.client = null;
  }

  async reset () {
    const confi = {
      user: config.postgres.user,
      host: config.postgres.host,
      password: config.postgres.password
    };

    try {
      await pgtools.dropdb(confi, config.postgres.database);
    } catch (err) {
      console.log('Grosse merde', err);
    }

    await pgtools.createdb(confi, config.postgres.database);
    await this.init();
    await this.buildTables();
    await this.insertTables();
    console.log('bien joué bg');
  }

  async buildTables () {
    const models = require('../models/modelByName.js');
    for (const model of models) {
      const q = model.toSqlTable();
      if (Array.isArray(q)) {
        for (const query of q) {
          console.log(query);
          await this.client.query(query);
        }
      } else {
        console.log(q);
        await this.client.query(q);
      }
    }
  }

  async insertTables () {
    const Item = require('../models/item.js');
    const sampleItem = require('../insert_json/item.json');
    for (let i = 0; i < sampleItem.length; i++) {
      await Item.insert(sampleItem[i]);
    }
    console.log('Item');
    const School = require('../models/school.js');
    const sampleSchool = require('../insert_json/school.json');
    for (let i = 0; i < sampleSchool.length; i++) {
      await School.insert(sampleSchool[i]);
    }
    console.log('School');
    const Class = require('../models/class.js');
    const sampleClass = require('../insert_json/class.json');
    for (let i = 0; i < sampleClass.length; i++) {
      await Class.insert(sampleClass[i]);
    }
    console.log('Class');
    const Student = require('../models/student.js');
    const sampleStudent = require('../insert_json/student.json');
    for (let i = 0; i < sampleStudent.length; i++) {
      await Student.insert(sampleStudent[i]);
    }
    console.log('Student');
    const Subject = require('../models/subject.js');
    const sampleSubject = require('../insert_json/subject.json');
    for (let i = 0; i < sampleSubject.length; i++) {
      await Subject.insert(sampleSubject[i]);
    }
    console.log('Subject');
    const Teacher = require('../models/teacher.js');
    const sampleTeacher = require('../insert_json/teacher.json');
    for (let i = 0; i < sampleTeacher.length; i++) {
      await Teacher.insert(sampleTeacher[i]);
    }
    console.log('Teacher');
    const Matiere = require('../models/matiere.js');
    const sampleMatiere = require('../insert_json/matiere.json');
    for (let i = 0; i < sampleMatiere.length; i++) {
      await Matiere.insert(sampleMatiere[i]);
    }
    console.log('Matiere');
    const Question = require('../models/question.js');
    const sampleQuestion = require('../insert_json/question.json');
    for (let i = 0; i < sampleQuestion.length; i++) {
      await Question.insert(sampleQuestion[i]);
    }
    console.log('Question');
    const Answer = require('../models/answer.js');
    const sampleAnswer = require('../insert_json/answer.json');
    for (let i = 0; i < sampleAnswer.length; i++) {
      await Answer.insert(sampleAnswer[i]);
    }
    console.log('Answer');
    const Inventory = require('../models/inventory.js');
    const sampleInventory = require('../insert_json/inventory.json');
    for (let i = 0; i < sampleInventory.length; i++) {
      await Inventory.insert(sampleInventory[i]);
    }
    console.log('Inventory');
    const Quizz = require('../models/quizz.js');
    const sampleQuizz = require('../insert_json/quizz.json');
    for (let i = 0; i < sampleQuizz.length; i++) {
      await Quizz.insert(sampleQuizz[i]);
    }
    console.log('Quizz');
    const Result = require('../models/result.js');
    const sampleResult = require('../insert_json/result.json');
    for (let i = 0; i < sampleResult.length; i++) {
      await Result.insert(sampleResult[i]);
    }
    console.log('Result');
    console.log('Insert was a success !');
  }
}

module.exports = new PostgresStore();
