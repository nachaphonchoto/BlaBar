const mongoose = require('mongoose')
const Chat = require('./Chat')
const User = require("./User");
const TopicSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true 
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true 
    },
    detail:{
        type: String,
    },
    date:{
        type:Date,
        default: Date.now
    },
    chat:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        default: []
    }]
})
module.exports = Topic = mongoose.model('topic', TopicSchema)