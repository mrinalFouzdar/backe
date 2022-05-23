const mongoose = require("mongoose")
const userModel= require("../Models/user.model");


async function getAllUser(req, res, next) {
    try {
        let response = await userModel.find({})
        res.status(200).json(response);
      
        console.log("suc get from  DB")
    } catch (error) {
        // console.log(error)
        res.status(500).json(error)
        
    }

}
async function createUser(req,res,next){
    try {
        const body = req.body;
        const response = await userModel.insertMany(body);
        res.status(200).send(response)
        console.log("suc send to DB")
    } catch (error) {
        res.status(500).send(error)
    }

}



module.exports={
    getAllUser,
    createUser,
 
}