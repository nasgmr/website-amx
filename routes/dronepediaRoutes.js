const express = require('express');
const router = express.Router();

// Redirect otomatis ke tab pertama
router.get('/products/dronepedia', (req, res) => {
    res.redirect('/products/dronepedia/how-it-works');
});

// Tab 1: How it Works
router.get('/products/dronepedia/how-it-works', (req, res) => {
    res.render('dronepedia-how-it-works'); 
});

// Tab 2 & 3 (Siapkan rutenya dulu untuk nanti)
router.get('/products/dronepedia/classifications', (req, res) => {
    res.render('dronepedia-classifications'); 
});

router.get('/products/dronepedia/applications', (req, res) => {
    res.render('dronepedia-applications'); 
});

module.exports = router;