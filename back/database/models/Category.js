module.exports = (sequelize, DataTypes) => {

    let alias = "Categories";

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
        tableName: "categories",
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.belongsTo(models.TransactionTypes, {
            as: "transaction_type",
            foreingKey: "id_transactionType"
        });
        
    }

    return Category;
};