const _ = require('lodash');
const { FridgeItem, addToFridge } = require('../models/fridgeContent');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    addToFridge(req.body, res);
});

router.get('/', (req, res) => {
    res.send('Hello');
});

module.exports = router;