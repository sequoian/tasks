const test = require('./tests')

const validateEmail = value => Promise.resolve(value)
  .then(test.exists())
  .then(test.isString())
  .then(test.trimString())
  .then(test.validEmail())
  .then(test.end)
  .catch(test.handleError)

const validatePassword = value => Promise.resolve(value)
  .then(test.exists())
  .then(test.isString())
  .then(test.longerThan(5))
  .then(test.end)
  .catch(test.handleError)

const validateSignup = (email, password) => {
  const errors = {}
  return validateEmail(email)
    .then(result => {
      if (result) errors.email = result
      return password
    })
    .then(validatePassword)
    .then(result => {
      if (result) errors.password = result
    })
    .then(() => errors)
}

module.exports = validateSignup
