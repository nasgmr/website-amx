const express = require('express');
const router = express.Router();

// Rute untuk menangani URL /services
router.get('/services', (req, res) => {
    // Menyuruh server menampilkan file views/services.ejs
    res.render('services'); 
});

module.exports = router;