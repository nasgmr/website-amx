const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/services.controller');

router.get('/services', services.controller.getServicesPage);

module.exports = router;