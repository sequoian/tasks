const test = require('./tests')

const validateEmail = email => {
  if (!test.exists(email))
    return 'Required'
  if (test.isEmpty(email)) 
    return 'Required'
  email = email.trim()
  if (!test.validEmail(email)) 
    return 'Please enter a valid email'

  return null
}

const validatePassword = password => {
  if (!test.exists(password))
    return 'Required'
  if (test.isEmpty(password)) 
    return 'Required'
  if (!test.longerThan(5)(password)) 
    return 'Must be at least 6 characters long'

  return null
}

const validateSignup = values => {
  const errors = {}
  const {email, password} = values

  let error = validateEmail(email)
  if (error)
    errors.email = error

  error = validatePassword(password)
  if (error)
    errors.password = error

  return test.isEmpty(errors) ? null : errors
}

export default validateSignup
