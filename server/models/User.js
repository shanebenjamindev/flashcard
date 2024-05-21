module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        dayOfBirth: {
            type: DataTypes.DATE,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    },
        {
            freezeTableName: true
        }
    )
    return User;
}