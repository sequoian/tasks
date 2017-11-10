const test = require('./tests')

const validateEmail = email => new Promise((resolve, reject) => {
  test.exists(email) || reject(new Error('Required'))
  test.isString(email) || reject(new Error('Must be a string'))
  test.isEmpty(email) && reject(new Error('Required'))
  email = email.trim()
  test.validEmail(email) || reject(new Error('Please enter a valid email'))
  resolve()
})

const validatePassword = password => new Promise((resolve, reject) => {
  test.exists(password) || reject(new Error('Required'))
  test.isString(password) || reject(new Error('Must be a string'))
  test.isEmpty(password) && reject(new Error('Required'))
  test.longerThan(5)(password) || reject(new Error('Must be at least 6 characters long'))
  resolve()
})

const validateSignup = (email, password) => new Promise((resolve, reject) => {
  const errors = {}
  validateEmail(email)
    .catch(error => errors.email = error.message)
    .then(() => validatePassword(password))
    .catch(error => errors.password = error.message)
    .then(() => 
      test.isEmpty(errors) 
      ? resolve() 
      : reject(errors)
    )
})

module.exports = validateSignup
