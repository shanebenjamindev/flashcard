module.exports = (sequelize, DataTypes) => {
    const Flashcard = sequelize.define('Flashcard', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        topicId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Topic',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        solution: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            freezeTableName: true
        })
    return Flashcard;
}