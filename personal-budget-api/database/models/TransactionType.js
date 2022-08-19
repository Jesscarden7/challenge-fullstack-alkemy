module.exports = (sequelize, DataTypes) => {
    
    let alias = "TransactionTypes";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    };

    let config = {
        tableName: "transactiontypes",
        timestamps: false,
    };

    const TransactionType = sequelize.define(alias, cols, config);
    
    return TransactionType;
}