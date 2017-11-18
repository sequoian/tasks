class UserRepository {
  constructor(db, pgp) {
    this.db = db
    this.pgp = pgp
  }

  add(email, password) {
    return this.db.one(`
      INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *
    `, [email, password])
  }

  remove(id) {
    return this.db.result(`
      DELETE FROM users WHERE id = $1
    `, id, result => result.rowCount)
  }

  findById(id) {
    return this.db.oneOrNone(`
      SELECT * FROM users WHERE id = $1
    `, id)
  }

  findByEmail(email) {
    return this.db.oneOrNone(`
      SELECT * FROM users WHERE email = $1
    `, email)
  }
}

module.exports = UserRepository