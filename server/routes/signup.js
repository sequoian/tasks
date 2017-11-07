const router = require('express').Router()
const check = require('./middleware/check')
const trim = require('./middleware/trim')

const validateInputs = (req, res, next) => {
  res.json({message: 'You are all signed up!'})
}

router.post('/signup', [
  check([
    'email',
    'password',
  ]),
  validateInputs
])

module.exports = router
