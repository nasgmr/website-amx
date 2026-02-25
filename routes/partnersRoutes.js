const express = require('express');
const router = express.Router();

router.get('/about-us/partners-clients', (req, res) => {
    res.render('partners-clients'); 
});

module.exports = router;