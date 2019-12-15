const mongoose = require('mongoose');
const Joi = require('joi');
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
// Walidacja produktu
function validateItem(item){
    const schema = {
        name: Joi.string().min(3).max(80).required(),
        units: Joi.required(),
        avaliableQuantity : Joi.number().required()
    }
    return Joi.validate(item, schema);
}

// Dodawanie produktu do lodówki manualnie
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
exports.validateItem = validateItem;