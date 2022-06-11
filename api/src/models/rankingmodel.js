const mongoose = require('mongoose')

const rankingSchema = mongoose.Schema({
    nickname:{
        type:String,
        required:true
    },
    n_muertes:{
        type:String,
        required:true
    },
    n_disparo_magia:{
        type:String,
        required:true
    },
    n_disparo_arma:{
        type:String,
        required:true
    },
    tiempo:{
        type:String,
        required:true
    },


})

module.exports = mongoose.model('ranking',rankingSchema)