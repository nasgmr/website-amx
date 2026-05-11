const express = require('express');
const router = express.Router();
const aboutusController = require('../controllers/aboutusController');

router.get('/about-us', aboutusController.getAboutUsPage);

module.exports = router;