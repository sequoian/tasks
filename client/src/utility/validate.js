export const validateSignup = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Password required'
  }
  else if (values.password && values.password.length < 6) {
    errors.password = 'Must be at least 6 characters long'
  }

  return errors
}

export const validateLogin = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email required'
  }

  if (!values.password) {
    errors.password = 'Password required'
  }

  return errors
}
