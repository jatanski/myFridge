const express = require('express');
const error = require('../middleware/error');
const users = require('../routes/users');
const auth = require('../routes/auth');
const products = require('../routes/products');
const shoppingList = require('../routes/shoppingList');
const fridge = require('../routes/fridge');
const recipe = require('../routes/recipes');
const logged_in = require('../routes/logged_in');

module.exports = function (app) {
    app.use(express.json());
    app.use(error);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/products', products);
    app.use('/api/shoppingList', shoppingList);
    app.use('/api/fridge', fridge);
    // nie działa do sprawdzenia 
    // app.use('./api/recipe', recipe);
    app.use('/api/logged_in', logged_in);
};
