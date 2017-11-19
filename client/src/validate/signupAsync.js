const validateSignupAsync = values => {
  return fetch(`/api/users?email=${values.email}`)
    .then(response => {
      if (response.ok) {
        throw {email: 'That email is already taken'}
      }
    })
}

export default validateSignupAsync