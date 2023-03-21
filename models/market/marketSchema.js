const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = require('./itemSchema');

const marketSchema = new Schema({
    type: {
        type: String,
        enum:['GESTANTES LACTANTES','6 A 11  MESES', '1 A 2 AÑOS', '3  A 5 AÑOS'],
        unique: true,
        required: true
    },
    foodsToPrepare: {
        type: [itemSchema],
        minLength: 0,
        maxLength: 11
        },
    nutritionalFoods: {
        type: [itemSchema],
        minLength: 0,
        maxLength: 4
        }
    }
);

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;