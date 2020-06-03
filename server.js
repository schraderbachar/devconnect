const express = require('express')
const connectDB = require('./config/db')

const app = express()
//connect database
connectDB()

const PORT = process.env.PORT || 5000


app.get('/', (req, res) => res.send('api up'))


//define routes
//this way gets the users file and runs the logic in the file
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


//init middleware
app.use(express.json({ extended: false }));


app.listen(PORT, () => {
    console.log(`Server up and running on server ${PORT}`)
})

