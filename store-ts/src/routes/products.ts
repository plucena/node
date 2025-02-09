import {Router} from 'express';

import{ createProducts} from '../controllers/products';

const router = Router();

router.post('/', createProducts);

router.get('/');

router.patch('/:id');

router.delete('/:id');

export default router;  