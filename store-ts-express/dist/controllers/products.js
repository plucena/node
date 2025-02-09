"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProducts = exports.updateProducts = exports.getProducts = exports.createProducts = void 0;
const product_1 = require("../models/product");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'root',
    host: 'localhost',
    database: 'ecommerce',
    password: 'root',
    port: 5432,
});
const Products = [];
const createProducts = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, price } = req.body;
    const createdProduct = new product_1.Product(id, title, price);
    try {
        yield pool.query('INSERT INTO products (id, title, price) VALUES ($1, $2, $3)', [id, title, price]);
        resp.status(201).json({ product: createdProduct });
    }
    catch (error) {
        next(error);
    }
});
exports.createProducts = createProducts;
const getProducts = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('SELECT * FROM products');
        const products = result.rows;
        resp.json({ products });
    }
    catch (error) {
        next(error);
    }
});
exports.getProducts = getProducts;
const updateProducts = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const { id, title, price } = req.body;
    try {
        const result = yield pool.query('UPDATE products SET id = $1, title = $2, price = $3 WHERE id = $4 ', [id, title, price, productId]);
        if (result.rowCount === 0) {
            throw new Error('Product not found');
        }
        resp.json({ product: result.rows[0] });
    }
    catch (error) {
        next(error);
    }
});
exports.updateProducts = updateProducts;
const removeProducts = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    try {
        const result = yield pool.query('DELETE FROM products WHERE id = $1 ', [productId]);
        if (result.rowCount === 0) {
            throw new Error('Product not found');
        }
        resp.json({ message: 'Product removed', product: result.rows[0] });
    }
    catch (error) {
        next(error);
    }
});
exports.removeProducts = removeProducts;
