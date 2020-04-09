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
}
module.exports = new PostgresStore();
