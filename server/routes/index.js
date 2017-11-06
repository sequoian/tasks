const router = require('express').Router()

router.use('/api', [
  require('./signup'),
  require('./login')
])

module.exports = router
