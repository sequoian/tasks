// Checks that the request object has the required data
const check = values => {
  return (req, res, next) => {
    values = Array.isArray(values) ? values : [values]

    const passed = values.every(value => {
      return req.body[value]
    })

    passed ? next() : res.status(400).end()
  }
}

module.exports = check
