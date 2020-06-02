const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000


app.get('/', (req, res) => res.send('api up'))





app.listen(PORT, () => {
    console.log(`Server up and running on server ${PORT}`)
})

