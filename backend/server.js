const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/blogs', require('./routes/blogRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))  