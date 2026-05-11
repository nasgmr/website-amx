const express = require('express');
const router = express.Router();
const dronepediaController = require('../controllers/dronepedia.controller');

router.get('/products/dronepedia', dronepedia.controller.redirectDronepedia);
router.get('/products/dronepedia/how-it-works', dronepedia.controller.getHowItWorks);
router.get('/products/dronepedia/classifications', dronepedia.controller.getClassifications);
router.get('/products/dronepedia/applications', dronepedia.controller.getApplications);

module.exports = router;