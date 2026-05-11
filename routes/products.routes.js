const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/products', productController.redirectProducts);
router.get('/products/mapping', productController.getMappingProducts);
router.get('/products/education', productController.getEducationProducts);
router.get('/products/vertic-air', productController.getVerticAir);
router.get('/products/vertic-xl', productController.getVerticXL);
router.get('/products/qubit', productController.getQubit);

module.exports = router;
