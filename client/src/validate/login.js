const test = require('./tests')

const validateEmail = email => {
  if (!test.exists(email))  
    return 'Required'
  if (test.isEmpty(email))
    return 'Required'
  return null
}

const validatePassword = password => { 
  if (!test.exists(password))
    return 'Required'
  if (test.isEmpty(password))
    return 'Required'
  return null
}

const validateLogin = values => {
  const errors = {}
  const {email, password} = values

  let error = validateEmail(email)
  if (error)
    errors.email = error

  error = validatePassword(password)
  if (error)
    errors.password = error

  return errors
}

export default validateLogin
