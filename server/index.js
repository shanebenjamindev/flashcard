const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

// Foreign Key:
const { User, Group, Flashcard } = require('./models');

User.hasMany(Group, { foreignKey: 'id', as: 'Group' });
Group.belongsTo(User, { foreignKey: 'id', as: 'User' });

Group.hasMany(Flashcard, { foreignKey: 'id', as: 'Flashcard' });
Flashcard.belongsTo(Group, { foreignKey: 'id', as: 'Group' });

// App:
const app = express();
app.use(bodyParser.json());

// Define routes
routes(app);

// Sync database and start server
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
