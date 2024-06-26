const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id:String,
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:Boolean,
    createdDate:Date
});

const User = mongoose.model("User",userSchema);

module.exports = User;