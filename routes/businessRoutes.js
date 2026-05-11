const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');

router.get('/about-us/business-scale', businessController.getBusinessScale);

module.exports = router;