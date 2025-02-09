import { Request, RequestHandler, Response, NextFunction } from 'express';
import{Product} from '../models/product';

const Products: Product[] = [];

export const createProducts: RequestHandler = (req: Request, resp: Response, next: NextFunction )=> {
    const createdProduct = new Product(req.body.id, req.body.title, req.body.price);
    Products.push(createdProduct);
    resp.status(201).json({product: createdProduct});
}   

