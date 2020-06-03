const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

mongoose.connect(db)

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

        console.log('MongoDB connected')
    } catch (err) {
        console.error(err)
        //if failed- exit with code one
        process.exit(1)
    }
}


module.exports = connectDB