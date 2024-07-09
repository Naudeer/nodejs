import express from 'express';
import personController from '../controllers/personController';

const router = express.Router();

router.get('/', personController.getAll);
router.get('/:id', personController.getById);
router.post('/', personController.create);
router.patch('/:id', personController.update);
router.delete('/:id', personController.delete);

export default router;
