const mongoose = require('mongoose')

const TopicSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true 
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
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
        ref: 'chat',
        default: []
    }]
})
module.exports = Topic = mongoose.model('topic', TopicSchema)