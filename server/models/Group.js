const Flashcard = require("./Flashcard");

module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Group', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        groupName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true
    })
    return Group;
}