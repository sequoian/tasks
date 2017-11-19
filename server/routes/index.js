const router = require('express').Router()

router.use('/api', [
  require('./signup'),
  require('./login'),
  require('./users')
])

module.exports = router
