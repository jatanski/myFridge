const mongoose = require('mongoose');
const Product = require('./product');
const Unit = require('./unit')

// Fridge content Schema
const fridgeContentSchema = new moongose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Product'
        type: String,
        required: true
    },
    units : {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Unit'
        type: String,
        required: true
    },
    avaliableQuantity: {
        type: Number,
        required: true
    }
})

const fridgeContent = mongoose.model('fridgeContent', fridgeContentSchema);

// Adding products to the fridge manually
async function addToFridge(req, res){
    const item = new fridgeContent({
        id: 0,
        name: 'reg.name',
        units: 'req.units',
        avaliableQuantity: 'req.avaliabeQuantity'
    })
    const result = await iten.save();
}

exports.fridgeContent = fridgeContent;
exports.addToFridge = addToFridge;