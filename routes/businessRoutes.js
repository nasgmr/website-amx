const express = require('express');
const router = express.Router();

router.get('/about-us/business-scale', (req, res) => {
    res.render('business-scale'); 
});

module.exports = router;