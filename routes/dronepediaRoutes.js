const express = require('express');
const router = express.Router();

router.get('/dronepedia', (req, res) => {
    res.render('dronepedia'); 
});

module.exports = router;