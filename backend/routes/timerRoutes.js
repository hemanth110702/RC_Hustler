const express = require('express');
const {createTimer, updateTimer} = require('../controller/timerController');

const router = express.Router();

router.post('/create', createTimer);
router.post('/update', updateTimer);

module.exports = router;