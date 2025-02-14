const express = require('express');
const { createCoin} = require('../controller/coinController');

const router = express.Router();
router.post('/create', createCoin);
// router.get('/getOne', getOne);
// router.get('/getAll', getAll);

module.exports = router;