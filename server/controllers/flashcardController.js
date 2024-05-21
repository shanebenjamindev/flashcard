const Flashcard = require('../models/Flashcard');

const createFlashcard = async (req, res) => {
    const { question, answer } = req.body;

    try {
        const flashcard = await Flashcard.create({ question, answer, userId: req.user.id });
        res.status(201).json(flashcard);
    } catch (err) {
        res.status(400).json({ message: 'Error creating flashcard', error: err });
    }
};

const getFlashcards = async (req, res) => {
    try {
        const flashcards = await Flashcard.findAll({ where: { userId: req.user.id } });
        res.json(flashcards);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching flashcards', error: err });
    }
};

const updateFlashcard = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    try {
        const flashcard = await Flashcard.findOne({ where: { id, userId: req.user.id } });
        if (!flashcard) {
            return res.status(404).json({ message: 'Flashcard not found' });
        }

        flashcard.question = question;
        flashcard.answer = answer;
        await flashcard.save();
        res.json(flashcard);
    } catch (err) {
        res.status(400).json({ message: 'Error updating flashcard', error: err });
    }
};

const deleteFlashcard = async (req, res) => {
    const { id } = req.params;

    try {
        const flashcard = await Flashcard.findOne({ where: { id, userId: req.user.id } });
        if (!flashcard) {
            return res.status(404).json({ message: 'Flashcard not found' });
        }

        await flashcard.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: 'Error deleting flashcard', error: err });
    }
};

module.exports = { createFlashcard, getFlashcards, updateFlashcard, deleteFlashcard };
