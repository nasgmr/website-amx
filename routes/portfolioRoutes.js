const express = require('express');
const router = express.Router();

router.get('/about-us/portfolio', (req, res) => {
    res.redirect('/about-us/portfolio/2018');
});

router.get('/about-us/portfolio/2018', (req, res) => {
    res.render('portfolio-2018', { active: '2018' }); 
});

router.get('/about-us/portfolio/2019', (req, res) => {
    res.render('portfolio-2019', { active: '2019' }); 
});

router.get('/about-us/portfolio/2020', (req, res) => {
    res.render('portfolio-2020', { active: '2020' }); 
});

router.get('/about-us/portfolio/2021', (req, res) => {
    res.render('portfolio-2021', { active: '2021' }); 
});

router.get('/about-us/portfolio/2022', (req, res) => {
    res.render('portfolio-2022', { active: '2022' }); 
});

router.get('/about-us/portfolio/2023', (req, res) => {
    res.render('portfolio-2023', { active: '2023' }); 
});

router.get('/about-us/portfolio/2024', (req, res) => {
    res.render('portfolio-2024', { active: '2024' }); 
});

router.get('/about-us/portfolio/2025', (req, res) => {
    res.render('portfolio-2025', { active: '2025' }); 
});

module.exports = router;