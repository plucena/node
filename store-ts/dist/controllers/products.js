"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts = void 0;
const product_1 = require("../models/product");
const Products = [];
const createProducts = (req, resp, next) => {
    const createdProduct = new product_1.Product(req.body.id, req.body.title, req.body.price);
    Products.push(createdProduct);
    resp.status(201).json({ product: createdProduct });
};
exports.createProducts = createProducts;
