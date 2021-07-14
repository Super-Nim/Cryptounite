const mongoose = require('mongoose')
const { isEmail } = require('validator')

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail,'please insert valid email'],
        unique: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    region: {
        type: String,
        required: true,
    },
    wallet: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: true, // select false for real application
        trim: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Customer', CustomerSchema)