const User = require("./../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

exports.registerUser = async(req, res) => {

    const {name, surname, mail, password, username, year, phone} = req.body;
    try{
        const existedUser = await User.findOne({$or: 
            [ {mail}, {username} ]
        });
        if(existedUser) return res.status(400).json({message: "this user already exist"});

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name, surname, username, mail, year, phone, password: hashedPassword
        })
        res.status(201).json({message: "Registration successful", user})

    }catch(err){
        res.status(500).json({message: "registration error", error: err.message});
    }
}