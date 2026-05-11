const express = require('express');
const router = express.Router();
const partnersController = require('../controllers/partners.controller');

router.get('/about-us/partners-clients', partnersController.getPartnersClients);

module.exports = router;
