const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000

// Parse POST data
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Priority serve any static files.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../react/build')))
}

/** Routes **/
app.get('/api', (req, res) => {
  console.log('hit')
  res.send('Hello, world!')
})

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react/build', 'index.html'))
})

// Listen for incoming requests
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})