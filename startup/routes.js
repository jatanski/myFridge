const express = require('express');
const error = require('../middleware/error');
const users = require('../routes/users');
const auth = require('../routes/auth');
const products = require('../routes/products');
const shoppingList = require('../routes/shoppingList');

module.exports = function (app) {
  app.use(express.json());
  app.use(error);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/products', products);
  app.use('/api/shoppingList', shoppingList);
};