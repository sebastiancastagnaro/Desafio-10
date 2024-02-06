

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.post('/products', productsController.createProduct);
router.get('/mockingproducts', productsController.mockingProducts);

module.exports = router;
