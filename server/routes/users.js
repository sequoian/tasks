const router = require('express').Router()
const db = require('../db')

const checkIfExists = (req, res, next) => {
  if (req.query.email) {
    db.users.findByEmail(req.query.email.trim())
      .then(user => {
        if (user) {
          res.status(204).end()
        }
        else {
          res.status(404).end()
        }
      })
  }
  else {
    res.status(400).end()
  }
}

router.get('/users', [
  checkIfExists
])

module.exports = router
