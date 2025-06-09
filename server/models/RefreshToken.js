module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define("RefreshToken", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id",
            },
            onDelete: "CASCADE",
        },

        refreshToken: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
    });

    return RefreshToken;
};
