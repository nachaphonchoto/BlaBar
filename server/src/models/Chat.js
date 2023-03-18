const mongoose = require('mongoose')
const User = require("./User");
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
        type: mongoose.Schema.Types.String,
        ref: 'User',
        default: []
    }
})
module.exports = Chat = mongoose.model('chat', ChatSchema)