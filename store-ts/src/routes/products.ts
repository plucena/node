import {Router} from 'express';

import{ createProducts, getProducts, updateProducts, removeProducts} from '../controllers/products';



const router = Router();

router.post('/', createProducts);

router.get('/', getProducts);

router.patch('/:id', updateProducts);

router.delete('/:id', removeProducts);

export default router;  