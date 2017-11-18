const repos = require('./repos')
const initOptions = {
  extend(obj, dc) {
    obj.users = new repos.Users(obj, pgp)
  }
}
const pgp = require('pg-promise')(initOptions)

let db
if (process.env.NODE_ENV === 'production') {
  // connect to heroku database
  db = pgp(process.env.DATABASE_URL)
}
else {
  // connect to local database
  const secret = require('../secret.json')
  const config = {
    host: 'localhost',
    port: 5432,
    database: 'tasks',
    user: 'postgres',
    password: secret.psqlPassword
  }
  db = pgp(config);
}

console.log('init db')

module.exports = db