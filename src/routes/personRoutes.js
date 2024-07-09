import { Router } from 'express';
import { getAll, getById, create, update, deletePerson } from '../controllers/personController.js';

const router = Router();

router.get('/people', getAll);
router.get('/person/:id', getById);
router.post('/create-person', create);
router.patch('/person/:id', update);
router.delete('/person/:id', deletePerson);

export default router;
