const mongoose = require('mongoose')
const Chat = require('./Chat')
const TopicSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true 
    },
    speaker:{
        type:String,
        required: true,
    },
    detail:{
        type: String,
    },
    date:{
        type:Date,
        default: Date.now
    },
    room: {
        type:String,
        required: true,
        unique: true
    },
    chat:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        default: []
    }]
})
module.exports = Topic = mongoose.model('topic', TopicSchema)