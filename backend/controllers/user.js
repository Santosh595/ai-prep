require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const req = require('express/lib/request');
const generateToken = require('../utils/generateToken');


const signup = async (req,res) =>{
    const { name, email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if(user) return res.status(400).json({msg: "User already exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        user = new User({name, email, password:hashedPassword});
        await user.save();

        const token = generateToken(user.id);
        res.json({ token });

    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

const login = async (req,res) =>{
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({ msg: "Invalid credentials"});
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ msg: "Invalid credentials"});
        
        const token = generateToken(user.id);
        res.json({ token });

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

const getCurrrentUser = async(req,res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

module.exports = { login, signup, getCurrrentUser};