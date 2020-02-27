const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
    res.status(200).send(JSON.stringify('Valid Token'))
});

module.exports = router;