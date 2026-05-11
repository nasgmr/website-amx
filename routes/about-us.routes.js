const express = require('express');
const router = express.Router();
const aboutusController = require('../controllers/about-us.controller');

router.get('/about-us', about-us.controller.getAboutUsPage);

module.exports = router;