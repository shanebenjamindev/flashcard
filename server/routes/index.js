const authRoutes = require('./authRoutes')
const flashcardRoutes = require('./flashcardRoutes');

const routes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/flashcard', flashcardRoutes);
};

module.exports = routes;
