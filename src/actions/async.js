import {SubmissionError} from 'redux-form'

export const createAccount = values => {
  const testFetch = () => new Promise(resolve => setTimeout(resolve, 500))
  return testFetch()
    .then(response => {
      throw new SubmissionError({
        _error: 'Backend not in yet, silly.'
      })
    }, error => {
      // something went wrong
      return Promise.resolve()
    })
}
