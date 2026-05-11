const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/about-us/portfolio', portfolioController.redirectPortfolio);
router.get('/about-us/portfolio/2018', portfolioController.getPortfolio2018);
router.get('/about-us/portfolio/2019', portfolioController.getPortfolio2019);
router.get('/about-us/portfolio/2020', portfolioController.getPortfolio2020);
router.get('/about-us/portfolio/2021', portfolioController.getPortfolio2021);
router.get('/about-us/portfolio/2022', portfolioController.getPortfolio2022);
router.get('/about-us/portfolio/2023', portfolioController.getPortfolio2023);
router.get('/about-us/portfolio/2024', portfolioController.getPortfolio2024);
router.get('/about-us/portfolio/2025', portfolioController.getPortfolio2025);

module.exports = router;