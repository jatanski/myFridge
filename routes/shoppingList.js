const _ = require('lodash');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { ShoppingListItem, validateItem, addShoppingListItem } = require('../models/shoppingListItem');
const { Unit, getUnits, getValue, sumValues } = require('../models/unit');

router.post('/', auth, async (req, res) => {
    const { error } = validateItem(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let item = await ShoppingListItem.findOne({ name: req.body.name });
    if (item) return res.status(400).send('that product already exist');
    addShoppingListItem(req.body, res);
});

router.get('/:shoppingListItem', async (req, res) => {
    console.log(req.params.shoppingListItem);
    const value = await getValue(req.params.shoppingListItem, 1);
    console.log('value', value);
    const sum = await sumValues([
        { unit: 'cup', amount: 1 },
        { unit: 'cup', amount: 1 },
        { unit: 'mililiter', amount: 100 },
    ]);
    console.log('sum', sum);
    let item = !isNaN(parseInt(req.params.shoppingListItem))
        ? await ShoppingListItem.findOne({ id: req.params.shoppingListItem })
              .populate('units', 'name -_id')
              .select('id name quantity units -_id')
        : await ShoppingListItem.findOne({ name: req.params.shoppingListItem })
              .populate('units', 'name -_id')
              .select('id name quantity units -_id');
    if (item) return res.send(item);
    return res.status(404).send(`That product doesn't exist`);
});

router.get('/', async (req, res) => {
    console.log(await getUnits());
    const items = await ShoppingListItem.find()
        .populate('units', 'name -_id')
        .select('id name quantity units -_id');
    return res.send(items);
});

router.put('/:shoppingListItem', auth, async (req, res) => {
    let item = !isNaN(parseInt(req.params.shoppingListItem))
        ? await ShoppingListItem.findOne({ id: req.params.shoppingListItem })
        : await ShoppingListItem.findOne({ name: req.params.shoppingListItem });

    item = !isNaN(parseInt(req.params.shoppingListItem))
        ? await ShoppingListItem.findOneAndUpdate(
              { id: req.params.shoppingListItem },
              {
                  $set: {
                      id: !!req.body.id ? req.body.id : item.id,
                      name: !!req.body.name ? req.body.name : item.name,
                      units: !!req.body.units ? req.body.units : item.units,
                      quantity: !!req.body.quantity ? req.body.quantity : item.quantity,
                  },
              },
              { returnNewDocument: true, upsert: true, new: true },
          )
        : await ShoppingListItem.findOneAndUpdate(
              { name: req.params.shoppingListItem },
              {
                  $set: {
                      id: !!req.body.id ? req.body.id : item.id,
                      name: !!req.body.name ? req.body.name : item.name,
                      units: !!req.body.units ? req.body.units : item.units,
                      quantity: !!req.body.quantity ? req.body.quantity : item.quantity,
                  },
              },
              { returnNewDocument: true, upsert: true, new: true },
          );
    return res.send(item);
});

router.delete('/:shoppingListItem', auth, async (req, res) => {
    return res.send(
        !isNaN(parseInt(req.params.shoppingListItem))
            ? await ShoppingListItem.deleteOne({ id: req.params.shoppingListItem })
            : await ShoppingListItem.deleteOne({ name: req.params.shoppingListItem }),
    );
});

module.exports = router;
