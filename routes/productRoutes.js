const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.redirect('/products/mapping');
});

router.get('/products/mapping', (req, res) => {
    res.render('products-mapping', { active: 'mapping' }); 
});

router.get('/products/education', (req, res) => {
    res.render('products-education', { active: 'education' }); 
});

router.get('/products/vertic-air', (req, res) => {
    res.render('vertic-air');
});

router.get('/products/vertic-xl',(req, res) => {
    res.render('vertic-xl');
});

router.get('/products/qubit', (req, res) => {
    res.render('qubit');
});

module.exports = router;