import { Request, RequestHandler, Response, NextFunction } from 'express';
import{Product} from '../models/product';

const Products: Product[] = [];

export const createProducts: RequestHandler = (req: Request, resp: Response, next: NextFunction )=> {
    const createdProduct = new Product(req.body.id, req.body.title, req.body.price);
    Products.push(createdProduct);
    resp.status(201).json({product: createdProduct});
}   

export const getProducts: RequestHandler = (req: Request, resp: Response, next: NextFunction )=> {
    resp.json({products: Products});
}

export const updateProducts: RequestHandler = (req: Request, resp: Response, next: NextFunction )=> {
    const productId = req.params.id;
    const productIndex = Products.findIndex(prod => prod.id === parseInt(productId));
    if(productIndex < 0) {
        throw new Error('Product not found');
    }
    Products[productIndex] = new Product(req.body.id, req.body.title, req.body.price);
    resp.json({products: Products});
}

export const removeProducts: RequestHandler = (req: Request, resp: Response, next: NextFunction )=> {    
    const productId = req.params.id;
    const productIndex = Products.findIndex(prod => prod.id === parseInt(productId));
    if(productIndex < 0) {
        throw new Error('Product not found');
    }
    Products.splice(productIndex, 1);
    resp.json({products: Products});
}