const express = require('express');
const router = express.Router();
const businessController = require('../controllers/business.controller');

router.get('/about-us/business-scale', business.controller.getBusinessScale);

module.exports = router;