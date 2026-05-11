const express = require('express');
const router = express.Router();
const dronepediaController = require('../controllers/dronepedia.controller');

router.get('/products/dronepedia', dronepediaController.redirectDronepedia);
router.get(
  '/products/dronepedia/how-it-works',
  dronepediaController.getHowItWorks
);
router.get(
  '/products/dronepedia/classifications',
  dronepediaController.getClassifications
);
router.get(
  '/products/dronepedia/applications',
  dronepediaController.getApplications
);

module.exports = router;
