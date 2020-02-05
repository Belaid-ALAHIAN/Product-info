const express = require('express');

const productController = require('../controler/product');
const router = express.Router();

router.get('/product',productController.getProduct);

router.get('/addProduct',productController.getAddProduct);
router.post('/addProduct',productController.postAddProduct);

router.post('/delete-product',productController.postDeleteProduct);

router.post('/update-product',productController.postUpdatePoduct);

router.post('/product',productController.postFindByName);

router.get('/detail/:productId',productController.getDetail);

module.exports = router;