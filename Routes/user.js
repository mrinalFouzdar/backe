const express = require("express")
const app = express();
const userController = require("../Controllers/user.contro")
app.use(express.json());




app.post('/user', userController.createUser);
app.get('/user' , userController.getAllUser)

module.exports = app;