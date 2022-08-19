module.exports = (sequelize, DataTypes) => {

    let alias = "Transactions";

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
        },
        amount: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    };

    let config = {
        tableName: "transactions",
        timestamps: false,
    };

    const Transaction = sequelize.define(alias, cols, config);

    Transaction.associate = function(models){
        Transaction.belongsTo(models.Users, {
            as: "user",
            foreingKey: "id_user"
        });

        Transaction.belongsTo(models.TransactionTypes, {
            as: "transaction_type",
            foreingKey: "id_transactionType"
        });

        Transaction.belongsTo(models.Categories, {
            as: "category",
            foreingKey: "id_category"
        });
    }

    return Transaction;

}