const express = require('express');
const { createCoin } = require('../controller/coinController');

const router = express.Router();
router.post('/create', createCoin);

module.exports = router;