import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import clientRoutes from './routes/clientRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

// help to access json format in the req.body
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/clients', clientRoutes)
app.use('/api/users', userRoutes)

app.use((req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`)
  res.status(404)
  next(error)
})

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  })
})

const PORT = process.env.PORT || 5001
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode port ${PORT}`)
)
