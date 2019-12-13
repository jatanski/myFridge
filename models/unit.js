const mongoose = require('mongoose');

const Unit = mongoose.model('Unit', new mongoose.Schema({
    name: String,
    type: String,
    value: Number
}));

exports.Unit = Unit;
