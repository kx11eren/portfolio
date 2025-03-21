const express = require('express');
const { SERVER_HEALTH } = require('../Server/Server');

const router = express.Router();

// Register and login routes
router.post('/health', SERVER_HEALTH);

module.exports = router;
