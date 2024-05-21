module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define('Topic', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        decription: {
            type: DataTypes.TEXT,
        },
    },
        {
            freezeTableName: true
        }
    )
    return Topic;
}