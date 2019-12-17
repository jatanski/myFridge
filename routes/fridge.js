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

// Dopisać dodawanie produktu do lodówki ze zrealizowanej listy zakupowej

// Aktualizacja produktów w lodówce
// router.put('/api/fridge/:id', (req, res) => {

// })

// Usuwanie produktów z lodówki

// Pobieranie produktów dostępnych w lodówce
router.get('/', async (req, res) => {
    const fridgeContent = await FridgeItem
        .find()
        .populate('name', 'name -_id')
        .select({name : 1, units: 1, avaliableQuantity: 1});
    return res.send(fridgeContent);
});

// Pobieranie konkretnego produktu
router.get('/:item', async (req, res) => {
    let item = await FridgeItem
        .findOne({ name: req.params.item })
        .populate('name', 'name -_id')
        .select('name units avaliableQuantity')
    if (item) return res.send(item)
    return res.status(404).send(`There is no such product in the fridge`);
});

module.exports = router;