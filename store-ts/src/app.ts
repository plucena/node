import express, {Request, Response, NextFunction} from 'express';

import  productRoutes from './routes/products'

import { json } from 'body-parser'; 
  
const app = express();

app.use(json());

app.use("/product",productRoutes);

// Error handling middleware
app.use((err:Error, req:Request, resp:Response, next:NextFunction ) => {
    resp.status(500).json({message: err.message});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});