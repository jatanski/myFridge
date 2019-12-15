const mongoose = require('mongoose');
const _ = require('lodash');
const Product = require('./product');
const Unit = require('./unit')

// Fridge content Schema
const fridgeItemSchema = new mongoose.Schema({
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
});

const FridgeItem = mongoose.model('FridgeItem', fridgeItemSchema);

// Adding products to the fridge manually
async function addToFridge(req, res){
    const item = new FridgeItem({
        id: 0,
        name: req.name,
        units: req.units,
        avaliableQuantity: req.avaliableQuantity
    })
    const result = await item.save();
    res.send(_.pick(item, ['id', 'name', 'units', 'avaliableQuantity']));
    return result
};

exports.FridgeItem = FridgeItem;
exports.addToFridge = addToFridge;