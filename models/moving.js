const mongoose = require('mongoose');

const movingSchema  = new mongoose.Schema({
     address: {
         required: true,
       
         type: String
     },

     postal_code: {
         required: true,
       
         type: Number
     },
     city: {
         required: true,
       
         type: String
     },
     state: {
         required: true,

         type: String
     },
     date : {
         required: true,
         type: Date
     },
     rooms: {
         required: true,

         type: Number
     },
     floors: {
         required: true,
         type: String
     }
 
 })

 module.exports = mongoose.model('Movings', movingSchema );