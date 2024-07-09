import { Router } from 'express';
import { getAll, getById, create, update, deletePerson } from '../controllers/personController';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', deletePerson);

export default router;
