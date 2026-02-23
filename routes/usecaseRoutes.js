const express = require('express');
const router = express.Router();

router.get('/resources/use-case', (req, res) => {
    res.redirect('/resources/use-case/infrastructure');
});

router.get('/resources/use-case/infrastructure', (req, res) => {
    res.render('use-case-infrastructure', { active: 'infrastructure' }); 
});

router.get('/resources/use-case/tourism', (req, res) => {
    res.render('use-case-tourism', { active: 'tourism' }); 
});

router.get('/resources/use-case/agri-forest', (req, res) => {
    res.render('use-case-agri-forest', { active: 'agri-forest' }); 
});

router.get('/resources/use-case/agri-plant', (req, res) => {
    res.render('use-case-agri-plant', { active: 'agri-plant' }); 
});

module.exports = router;