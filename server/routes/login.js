const router = require('express').Router()
const validate = require('../validate')

const validateInputs = (req, res, next) => {
  const {email, password} = req.body
  validate.login(email, password)
    .then(() => {
      res.status(200).json({
        message: 'You have logged in!'
      })
    })
    .catch(errors => {
      res.status(400).json({
        message: 'Validation failed',
        errors: errors
      })
    })
}

router.post('/login', [
  validateInputs
])

module.exports = router
