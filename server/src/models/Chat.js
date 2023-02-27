const mongoose = require('mongoose')
const ChatSchema = new mongoose.Schema({
    sender:{
        type: String, 
        required: true 
    },
    message:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})
module.exports = Chat = mongoose.model('chat', ChatSchema)