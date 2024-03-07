import express from 'express';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.route('/').get(getAllProducts).post(addProduct);

router.route('/:id').get(getProduct).post(updateProduct).delete(deleteProduct);

export default router;
