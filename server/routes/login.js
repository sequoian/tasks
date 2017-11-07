const router = require('express').Router()
const check = require('./middleware/check')
const trim = require('./middleware/trim')

const validateInputs = (req, res, next) => {
  res.json({message: 'You have logged in!'})
}

router.post('/login', [
  check([
    'email',
    'password'
  ]),
  validateInputs
])

module.exports = router
