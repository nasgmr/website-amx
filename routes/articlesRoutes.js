const express = require('express');
const router = express.Router();

router.get('/about-us/articles', (req, res) => {
    res.render('articles'); 
});

router.get('/about-us/articles/detail', (req, res) => {
    res.render('articles-detail');
});

module.exports = router;