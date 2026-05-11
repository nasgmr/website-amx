const express = require('express');
const router = express.Router();
const resourcesController = require('../controllers/resources.controller');

router.get('/resources', resourcesController.getResourcesMain);

module.exports = router;
