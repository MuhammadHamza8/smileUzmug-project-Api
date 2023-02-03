const mongoose = require('mongoose');

const dataSchema  = new mongoose.Schema({
    name: {
        required: true,
       
        type: String
    },
    phone_number: {
        required: true,
        type: Number
    },

    email: {
        required: true,
       

        type: String
    },
    message: {
        required: true,
        type: String
    }
 
})

module.exports = mongoose.model('Contacts', dataSchema );
