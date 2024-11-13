const mongoose = require('mongoose');


const UserData = new mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String,required: true,index: true},
    password:{type:String,required:true}
})

module.exports = mongoose.model("user",UserData);