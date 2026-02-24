const express = require('express');
const router = express.Router();

router.get('/aboutus', (req, res) => {
    res.render('aboutus-main'); 
});

module.exports = router;