const mongoose = require("mongoose")

class mongo{
    constructor(){
        this.createMongoConnection()
    }
    createMongoConnection(){
        // const DB =process.env.DATABASE
        mongoose.connect(`mongodb+srv://mrinal:BuzMCZJmofJShD5r@cluster0.q7jbg.mongodb.net/IndusOSDatabase?retryWrites=true&w=majority`);
        mongoose.connection.once('open',()=>{
            console.log("MongoDB is connected")
        })
        mongoose.connection.on('error',()=>{
            console.log("Error occured in mongoDB connection");
        })
    }
}

module.exports=mongo