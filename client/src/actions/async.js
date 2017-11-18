import {SubmissionError} from 'redux-form'
import {parseResponse} from '../utility/response'

export const createAccount = values => {
  return fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      return parseResponse(response)
    })
    .then(response => {
      const json = response.json
      let message

      console.log('response:', response)

      switch(response.status) {
        case 200:
        case 201:
        case 204:
          message = 'Account successfully created'
          break
        case 400:
          throw new SubmissionError({
            _error: json.message,
            email: json.errors.email,
            password: json.errors.password
          })
        default:
          message = 'Something went wrong'
      }

      throw new SubmissionError({
        _error: message
      })
    })
    .catch(error => {
      console.log('error:', error)
      if (error.name === 'SubmissionError') {
        throw error
      }
      else {
        throw new SubmissionError({
          _error: 'Failed to create account.  Please try again later.'
        })
      } 
    })
}

export const loginUser = values => {
  return fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      return parseResponse(response)
    })
    .then(response => {
      const json = response.json
      let message

      switch(response.status) {
        case 200:
          message = 'You have successfully logged in!'
          break
        case 400:
          throw new SubmissionError({
            _error: json.message,
            email: json.errors.email,
            password: json.errors.password
          })
        default:
          message = 'Something went wrong'
      }

      throw new SubmissionError({
        _error: message
      })
    })
    .catch(error => {
      if (error.name === 'SubmissionError') {
        throw error
      }
      else {
        throw new SubmissionError({
          _error: 'Failed to log in.  Please try again later.'
        })
      } 
    })
}
