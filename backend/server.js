const express = require('express')
require('dotenv').config()
require('colors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
//for error handling...
const { errorHandler } = require('./middleware/errorMiddleware')

// Connect to database
connectDB()


const app = express()

// it allows us to pass json as parm..
app.use(express.json())
// it allows us to pass values as in url..
app.use(express.urlencoded({ extended: false }))


// Routes
app.use('/api/users', require('./routes/userRoutes'))



app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))