const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio.controller');

router.get('/about-us/portfolio', portfolio.controller.redirectPortfolio);
router.get('/about-us/portfolio/2018', portfolio.controller.getPortfolio2018);
router.get('/about-us/portfolio/2019', portfolio.controller.getPortfolio2019);
router.get('/about-us/portfolio/2020', portfolio.controller.getPortfolio2020);
router.get('/about-us/portfolio/2021', portfolio.controller.getPortfolio2021);
router.get('/about-us/portfolio/2022', portfolio.controller.getPortfolio2022);
router.get('/about-us/portfolio/2023', portfolio.controller.getPortfolio2023);
router.get('/about-us/portfolio/2024', portfolio.controller.getPortfolio2024);
router.get('/about-us/portfolio/2025', portfolio.controller.getPortfolio2025);

module.exports = router;