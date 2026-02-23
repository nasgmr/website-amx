const express = require('express');
const router = express.Router();

// Redirect otomatis ke tab pertama
router.get('/resources/dronepedia', (req, res) => {
    res.redirect('/resources/dronepedia/how-it-works');
});

// Tab 1: How it Works
router.get('/resources/dronepedia/how-it-works', (req, res) => {
    res.render('dronepedia-how-it-works'); 
});

// Tab 2 & 3 (Siapkan rutenya dulu untuk nanti)
router.get('/resources/dronepedia/classifications', (req, res) => {
    res.render('dronepedia-classifications'); 
});

router.get('/resources/dronepedia/applications', (req, res) => {
    res.render('dronepedia-applications'); 
});

module.exports = router;