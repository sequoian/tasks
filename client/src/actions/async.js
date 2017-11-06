import {SubmissionError} from 'redux-form'

export const createAccount = values => {
  return fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      return response.json()
    }, error => {
      return Promise.resolve()
    })
    .then(json => {
      throw new SubmissionError({
        _error: json.message
      })
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
      return response.json()
    }, error => {
      return Promise.resolve()
    })
    .then(json => {
      throw new SubmissionError({
        _error: json.message
      })
    })
}
