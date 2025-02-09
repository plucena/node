import { Request, RequestHandler, Response, NextFunction } from 'express';
import{Product} from '../models/product';
import { Pool } from 'pg';

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'ecommerce',
    password: 'root',
    port: 5432,
});

const Products: Product[] = [];

export const createProducts: RequestHandler = async (req: Request, resp: Response, next: NextFunction )=> {
    const { id, title, price } = req.body;
    const createdProduct = new Product(id, title, price);

    try {
        await pool.query('INSERT INTO products (id, title, price) VALUES ($1, $2, $3)', [id, title, price]);
        resp.status(201).json({ product: createdProduct });
    } catch (error) {
        next(error);
    }
}   

export const getProducts: RequestHandler = async (req: Request, resp: Response, next: NextFunction )=> {
    try {
        const result = await pool.query('SELECT * FROM products');
        const products = result.rows;
        resp.json({ products });
    } catch (error) {
        next(error);
    }
}

export const updateProducts: RequestHandler = async (req: Request, resp: Response, next: NextFunction )=> {
    const productId = req.params.id;
    const { id, title, price } = req.body;

    try {
        const result = await pool.query(
            'UPDATE products SET id = $1, title = $2, price = $3 WHERE id = $4 ',
            [id, title, price, productId]
        );
        if (result.rowCount === 0) {
            throw new Error('Product not found');
        }
        resp.json({ product: result.rows[0] });
    } catch (error) {
        next(error);
    }
}

export const removeProducts: RequestHandler = async (req: Request, resp: Response, next: NextFunction )=> {    
    const productId = req.params.id;

    try {
        const result = await pool.query('DELETE FROM products WHERE id = $1 ', [productId]);
        if (result.rowCount === 0) {
            throw new Error('Product not found');
        }
        resp.json({ message: 'Product removed', product: result.rows[0] });
    } catch (error) {
        next(error);
    }
}