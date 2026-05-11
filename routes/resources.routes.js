const express = require('express');
const router = express.Router();
const resourcesController = require('../controllers/resources.controller');

router.get('/resources', resources.controller.getResourcesMain);

module.exports = router;