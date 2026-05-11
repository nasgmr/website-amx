const express = require('express');
const router = express.Router();
const usecaseController = require('../controllers/use-cases.controller');

router.get('/use-case', use-cases.controller.redirectUseCase);
router.get('/use-case/infrastructure', use-cases.controller.getInfrastructure);
router.get('/use-case/tourism', use-cases.controller.getTourism);
router.get('/use-case/agri-forest', use-cases.controller.getAgriForest);
router.get('/use-case/agri-plant', use-cases.controller.getAgriPlant);

module.exports = router;