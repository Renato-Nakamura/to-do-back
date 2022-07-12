import express from 'express';
const router = express.Router();

import {
  getListController,
  addListController,
  updateListController,
  deleteListController,
} from '../controllers/lists.controller.js';

import { validId } from '../middleware/lists.middleware.js';

router.get('/:listTitle', getListController);
router.post('/', addListController);
router.put('/:id', validId, updateListController);
router.delete('/:id', validId, deleteListController);

export default router;
