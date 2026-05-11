const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/products', products.controller.redirectProducts);
router.get('/products/mapping', products.controller.getMappingProducts);
router.get('/products/education', products.controller.getEducationProducts);
router.get('/products/vertic-air', products.controller.getVerticAir);
router.get('/products/vertic-xl', products.controller.getVerticXL);
router.get('/products/qubit', products.controller.getQubit);

module.exports = router;