const express = require('express');
const router = express.Router();
const usecaseController = require('../controllers/usecaseController');

router.get('/use-case', usecaseController.redirectUseCase);
router.get('/use-case/infrastructure', usecaseController.getInfrastructure);
router.get('/use-case/tourism', usecaseController.getTourism);
router.get('/use-case/agri-forest', usecaseController.getAgriForest);
router.get('/use-case/agri-plant', usecaseController.getAgriPlant);

module.exports = router;