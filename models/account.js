const mongoose = require('mongoose');

const accountSchema =  mongoose.Schema({
    "username": {
        type: String,
        required: true    
    },
    "password":{
        type: String,
        required: true
    },
    "createdDate":{
        type: Date,
        required: true,
        default: Date.now
    }
})
module.exports = mongoose.model('Account',accountSchema);