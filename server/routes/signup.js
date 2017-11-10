const router = require('express').Router()
const validate = require('../validate')

const validateInputs = (req, res, next) => {
  const {email, password} = req.body
  validate.signup(email, password)
    .then(() => {
      res.status(200).json({
        message: 'You are all signed up!'
      })
    })
    .catch(errors => {
      res.status(400).json({
        message: 'Validation failed',
        errors: errors
      })
    })
}

router.post('/signup', [
  validateInputs
])

module.exports = router
