const router = require('express').Router()
const validate = require('../validate')
const bcrypt = require('bcrypt')
const saltRounds = 10

const validateInputs = (req, res, next) => {
  const {email, password} = req.body
  validate.signup(email, password)
    .then(() => next())
    .catch(errors => {
      res.status(400).json({
        message: 'Validation failed',
        errors: errors
      }).end()
    })
}

const hashPassword = (req, res, next) => {
  const {password} = req.body
  const end = () => res.status(500).end()

  bcrypt.genSalt(saltRounds, (error, salt) => {
    if (error) end()

    bcrypt.hash(password, salt, (error, hash) => {
      if (error) end()

      req.body.hashedPassword = hash
      next()
    })
  })
}

const addUser = (req, res, next) => {
  const {email, hashedPassword} = req.body

  res.status(200).json({
    message: 'You are all signed up!'
  })
}

router.post('/signup', [
  validateInputs,
  hashPassword,
  addUser
])

module.exports = router
