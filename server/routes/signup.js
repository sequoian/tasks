const router = require('express').Router()

const validateInputs = (req, res, next) => {
  res.json({message: 'You are all signed up!'})
}

router.post('/signup', [
  validateInputs
])

module.exports = router
