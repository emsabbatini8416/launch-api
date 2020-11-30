const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const favoriteSchema = new Schema({
    fligthNumber: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Favorite', favoriteSchema);