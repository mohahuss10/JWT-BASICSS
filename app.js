require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const mainRouter = require('./routes/main.js')
const notFoundMiddleware = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

// middleware - order matters!
app.use(express.static('./public'))
app.use(express.json())

// ========= ROUTES ==========
// Simple route (should come before more specific routes)
app.get('/hello', (req, res) => {
  res.send('<h1>Task manager api</h1><p>user /api/v1/tasks</p>')
})

// Main API routes - FIXED: added leading slash
app.use('/api/v1/', mainRouter)

// Error handling middleware (should be last)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000

const start = async () => {
  try {
    // FIXED: console.log wrapped in a function
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()