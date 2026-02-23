const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.render('products'); 
});

module.exports = router;

router.get('/products/vertic-air', (req, res) => {
    res.render('vertic-air');
});

router.get('/products/vertic-xl',(req, res) => {
    res.render('vertic-xl');
});

router.get('/products/qubit', (req, res) => {
    res.render('qubit');
});