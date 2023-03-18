const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: []
    }
})
module.exports = Chat = mongoose.model('chat', ChatSchema)