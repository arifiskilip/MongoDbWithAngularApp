const express = require("express");
const router = express.Router();
const {v4:uuidv4} = require("uuid");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const mySecretKey="MySuperSecretKeyMySuperSecretKey";
const options = {
    expiresIn:"1h"
}

function generateToken(user){
    const token = jwt.sign({},mySecretKey,options);
    let model = {token:token,user:user};
    return model;
}

// Register Operation
router.post("/register", async(req,res)=>{
    try {
        const user = new User(req.body);
        user._id=uuidv4();
        user.isAdmin=false;
        user.createdDate = new Date();
        const checkUser = await User.findOne({email:user.email});
        if(checkUser !=null){
            res.status(403).json({message:"Bu email adresi zaten kullanılmakta!"});
        }
        else{
            await user.save();
            res.json(generateToken(user));
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

//Login Operation
router.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        const checkUser = await User.findOne({email:email});
        if(checkUser == null){
            res.status(403).json({message:"Kullanıcı bulunamadı!"});
        }
        else{
            if(checkUser.password == password){
                res.json(generateToken(checkUser));
            }
            else{
                res.status(403).json({message:"Kullanıcı bulunamadı!"});
            }
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

module.exports = router;