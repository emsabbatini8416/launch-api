const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const favoriteSchema = new Schema({
    flightNumber: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Favorite', favoriteSchema);