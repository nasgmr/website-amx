const express = require('express');
const router = express.Router();
const partnersController = require('../controllers/partnersController');

router.get('/about-us/partners-clients', partnersController.getPartnersClients);

module.exports = router;