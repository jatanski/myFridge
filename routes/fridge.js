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

// Usuwanie produktów z lodówki

// Pobieranie produktów dostępnych w lodówce
router.get('/', async (req, res) => {
    const fridgeContent = await FridgeItem
        .find()
        .select({name : 1, units: 1, avaliableQuantity: 1});
    return res.send(fridgeContent);
});

module.exports = router;