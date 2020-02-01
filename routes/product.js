const express = require('express');

const productController = require('../controler/product');
const router = express.Router();

router.get('/product',productController.getProduct);

router.post('/addProduct',productController.postAddProduct);

router.post('/delete-product',productController.postDeleteProduct);

router.post('/update-product',productController.postUpdatePoduct);

router.post('/find',productController.postFindByName);

module.exports = router;