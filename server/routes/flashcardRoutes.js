const express = require('express');
const { createFlashcard, getFlashcards, updateFlashcard, deleteFlashcard } = require('../controllers/flashcardController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createFlashcard);
router.get('/', authMiddleware, getFlashcards);
router.put('/:id', authMiddleware, updateFlashcard);
router.delete('/:id', authMiddleware, deleteFlashcard);

module.exports = router;
