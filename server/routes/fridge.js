const _ = require('lodash');
const { FridgeItem, addToFridge, validateItem } = require('../models/fridgeContent');
const express = require('express');
const router = express.Router();

// Dodawanie produktu do lodówki manualnie
router.post('/', (req, res) => {
    const result = validateItem(req.body);
    if (result.error){
        res.status(400).send('Niepoprawny input')
    }
    else {
        addToFridge(req.body, res);
    }
});

// Aktualizacja  produktu w lodówce
router.put('/:item', async (req, res) => {
    // Pobranie produktu
    const item = await FridgeItem
        .findOneAndUpdate({product: req.params.item}, req.body)
        .populate('product', 'name -_id')
    return res.send(item)
   
})

// Usuwanie produktu z lodówki
router.delete('/:item', async (req, res) => {
    const item = await FridgeItem
        .findOneAndDelete({product: req.params.item})
        .populate('product', 'name -_id')
    return res.send(item)
   
})


// Pobieranie produktów dostępnych w lodówce
router.get('/', async (req, res) => {
    const fridgeContent = await FridgeItem
        .find()
        .populate('product', 'name -_id')
        .select({product : 1, units: 1, avaliableQuantity: 1});
    return res.send(fridgeContent);
});

// Pobieranie konkretnego produktu
router.get('/:item', async (req, res) => {
    let item = await FridgeItem
        .findOne({ product: req.params.item })
        .populate('product', 'name -_id')
        .select('product units avaliableQuantity')
    if (item) return res.send(item)
    return res.status(404).send(`There is no such product in the fridge`);
});

module.exports = router;