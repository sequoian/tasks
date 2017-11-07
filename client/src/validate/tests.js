// Composes tests for promise chain
const wrapInPromise = (func, msg) => {
  return (message = msg, ...args) => value => {
    if (!func(value, ...args)) {
      return Promise.reject(message)
    }
    return value
  }
}


/* General Tests */

const exists = value => typeof value !== 'undefined'

const isString = value => typeof value === 'string'

const longerThan = (value, length) => value.length > length

const validEmail = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)


/* Exported Tests */

exports.exists = wrapInPromise(exists, 'required :)')

exports.isString = wrapInPromise(isString, 'stringaling')

exports.validEmail = wrapInPromise(validEmail, 'not an email, buster')

exports.longerThan = (length, message = 'not long enough, dummy') => value => {
  if (!longerThan(value, length)) {
    return Promise.reject(message)
  }
  return Promise.resolve(value)
}

exports.trimString = (message = 'could not trim') => value => {
  try {
    value = value.trim()
    return Promise.resolve(value)
  } catch (error) {
    return Promise.reject(message)
  }
}

exports.isEmpty = value => {
  if (typeof value === 'string') {
    // test string
    return !value
  }
  else if (Array.isArray(value)) {
    // test array
    return value.length < 1
  }
  else if (typeof value === 'object') {
    // test object
    return Object.keys(value).length < 1
  }
  else {
    return false
  }
}


/* Functions that finish promise chain */

// end with no errors
exports.end = value => null

// end with error
exports.handleError = error => error

