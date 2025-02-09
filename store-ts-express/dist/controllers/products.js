"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProducts = exports.updateProducts = exports.getProducts = exports.createProducts = void 0;
const product_1 = require("../models/product");
const Products = [];
const createProducts = (req, resp, next) => {
    const createdProduct = new product_1.Product(req.body.id, req.body.title, req.body.price);
    Products.push(createdProduct);
    resp.status(201).json({ product: createdProduct });
};
exports.createProducts = createProducts;
const getProducts = (req, resp, next) => {
    resp.json({ products: Products });
};
exports.getProducts = getProducts;
const updateProducts = (req, resp, next) => {
    const productId = req.params.id;
    const productIndex = Products.findIndex(prod => prod.id === parseInt(productId));
    if (productIndex < 0) {
        throw new Error('Product not found');
    }
    Products[productIndex] = new product_1.Product(req.body.id, req.body.title, req.body.price);
    resp.json({ products: Products });
};
exports.updateProducts = updateProducts;
const removeProducts = (req, resp, next) => {
    const productId = req.params.id;
    const productIndex = Products.findIndex(prod => prod.id === parseInt(productId));
    if (productIndex < 0) {
        throw new Error('Product not found');
    }
    Products.splice(productIndex, 1);
    resp.json({ products: Products });
};
exports.removeProducts = removeProducts;
