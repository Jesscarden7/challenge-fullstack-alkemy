const db = require("../database/models");
const bcrypt = require("bcrypt");

const userController = {
    register: async(req, res) => {
        const user = req.body;
        const existingUser = await db.Users.findOne({
            where:{
                email: user.email
            }
        });
        if(existingUser){
            return res.status(400).json("This email already exist")
        }
        let newUser;
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
            newUser = await db.Users.create(user)  
        } catch (error) {
            return res.status(500).json("There was an issue creating the user")
        }
        res.status(201).json(newUser);
    },
    login: async (req,res) => {
        const { email, password } = req.body;
        const existingUser = await db.Users.findOne({
            where:{
                email: email
            }
        });
        if(!existingUser){
            return res.status(400).json("Invalid credentials")
        }

        // Evaluate password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch){
            return res.status(401).json("Invalid credentials")
        }
        res.status(200).json("Success");
    }
}

module.exports = userController;