const express = require('express');
const router = express.Router();

// Rute untuk menangani URL /services
router.get('/resources', (req, res) => {
    // Menyuruh server menampilkan file views/resources-main.ejs
    res.render('resources-main'); 
});

module.exports = router;

router.get('/resources/use-case', (req, res) => {
    res.render('use-case');
});

router.get('/resources/dronepedia',(req, res) => {
    res.render('dronepedia');
});