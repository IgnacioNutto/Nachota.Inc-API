const mongoose = require('mongoose');

const Oferta = mongoose.model('Oferta', {
    name: {
        type: String,
        required: true,
        validate(value) {
            if (value.length > 20) {
                throw new Error('No se pueden ingresar nombres con más de 20 caracteres')
            }
        }
    },
    discount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

module.exports = Oferta;