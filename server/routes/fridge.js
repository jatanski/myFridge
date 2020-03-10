const _ = require('lodash');
const auth = require('../middleware/auth');
const { FridgeItem, addToFridge, validateItem } = require('../models/fridgeContent');
const express = require('express');
const router = express.Router();

// Dodawanie produktu do lodówki manualnie
router.post('/', auth, async (req, res) => {
    const user = req.user._id;
    req.body.owner = user;
    const result = validateItem(req.body);
    if (result.error) {
        res.status(400).send('Niepoprawny input')
    }
    else {
        const item = await FridgeItem
            .findOneAndUpdate({ product: req.body.product, owner: req.body.owner }, { $inc: { avaliableQuantity: req.body.avaliableQuantity } }, { new: true })
            .populate('product', 'name -_id')
        if (!item) {
            addToFridge(req.body, res);
        } else {
            return res.send(item)
        }


    }
});

// Aktualizacja  produktu w lodówce
router.put('/:item', async (req, res) => {
    // Pobranie produktu
    const item = await FridgeItem
        .findOneAndUpdate({ product: req.params.item }, req.body)
        .populate('product', 'name -_id')
    return res.send(item)

})

// Usuwanie produktu z lodówki
router.delete('/:item', async (req, res) => {
    const item = await FridgeItem
        .findOneAndDelete({ _id: req.params.item })
        .populate('product', 'name -_id')
    return res.send(item)

})


// Pobieranie produktów dostępnych w lodówce
router.get('/', auth, async (req, res) => {
    // user przechwycony przez auth z JWT;
    const user = req.user._id;
    console.log(user);
    // console.log(req.body);

    const fridgeContent = await FridgeItem
        .find({ owner: user })
        .populate('product', 'name -_id')
        .select({ product: 1, units: 1, avaliableQuantity: 1 });
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