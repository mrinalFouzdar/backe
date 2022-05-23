const mongoose = require("mongoose")

const user = new mongoose.Schema({
    "data":{type:String,required:true}
})

module.exports= mongoose.model("userdatas",user);