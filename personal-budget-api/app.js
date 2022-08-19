const express = require("express");
const app = express();

const mainRouter = require("./routes/main");
const transactionsRouter = require("./routes/transactions");
const usersRouter = require("./routes/users");

//Json post
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/api", mainRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/users", usersRouter);

app.listen(3000, () => { 
    console.log("Servidor corriendo en el puerto 3000")
});