const router = require('express').Router()

const validateInputs = (req, res, next) => {
  res.json({message: 'You have logged in!'})
}

router.post('/login', [
  validateInputs
])

module.exports = router
