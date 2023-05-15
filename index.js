import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'

import userControllers from './controllers/userControllers.js'

// Load environment variables 
dotenv.config()

// Mounting the app
const app = express()

// Middleware 
app.use(express.json())
app.use(cors())

const env = process.env.NODE_ENV || 'development'
if (env === 'development') {
    app.use(morgan((tokens, req, res) => {
        return `${req.method} ${req.url} ${res.statusCode} - ${tokens['response-time'](req, res)} ms`;
    }))
}

// Base endpoint
app.get("/", (req, res) => {
    res.send("Login & Register server")
})

// Routers
app.use('/users', userControllers)


// Mounting server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})
