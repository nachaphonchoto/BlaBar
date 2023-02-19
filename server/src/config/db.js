const mongoose = require('mongoose')

const db = require('./default.json')

const connectDB = async ()=>{
try { 
    mongoose.set('strictQuery', false);
    await mongoose.connect(db.mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true})
    console.log('Mongodb connect...')
} catch(err) {
    console.error(err.message)
    process.exit(1)
}

}
module.exports = connectDB