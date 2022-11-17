const mongoose = require('mongoose');

const portadaSchema = mongoose.Schema({
    descripcion:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: false
    },
    imagen:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Portada', portadaSchema);