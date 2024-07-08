const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/', personController.getAll);
router.get('/:id', personController.getById);
router.post('/', personController.create);
router.patch('/:id', personController.update);
router.delete('/:id', personController.delete);

module.exports = router;
