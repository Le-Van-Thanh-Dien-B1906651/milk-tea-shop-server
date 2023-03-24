const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }
}, {timestamps: true})

module.exports = mongoose.model('drinks', DrinkSchema)
