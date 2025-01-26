const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

module.exports = router;

