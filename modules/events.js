const mongoose = require('mongoose');
const event = new mongoose.Schema({
    title: String,
    venue: String,
    start: String,
    end: String,
    img:{
        data: Buffer,
        contentType: String
    },
    club: String,
    desc: String
})

module.exports = Event1 = mongoose.model('events',event);