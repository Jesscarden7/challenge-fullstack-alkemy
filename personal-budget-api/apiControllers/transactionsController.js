const db = require("../database/models");

const transactionsController = {
    list: async (req, res) => {
        let transactions;
        try {
            transactions = await db.Transactions.findAll({
                include: [
                    { association: "category",
                        include: [
                            {association: "transaction_type"}
                        ]
                     },
                    { association: "user" },
                ]
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json("Error searching for transaction");
        }

        res.status(200).json(transactions);
    },
    store: async (req, res) => {
        const transaction = req.body;
        let newTransaction;
        try {
            newTransaction = await db.Transactions.create(transaction);
        } catch (error) {
            return res.status(500).json("There was an issue creating the transaction")
        }
        res.status(201).json(newTransaction);
    },
    edit: (req, res) => {
        res.send("Editar form")
    },
    delete: (req, res) => {
        res.send("Delete")
    }
};

module.exports = transactionsController;