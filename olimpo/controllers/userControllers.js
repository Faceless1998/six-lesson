const User = require("./../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

exports.registerUser = async(req, res) => {

    const {name, surname, mail, password, username, year, phone, status} = req.body;
    try{
        const existedUser = await User.findOne({$or: 
            [ {mail}, {username} ]
        });
        if(existedUser) return res.status(400).json({message: "this user already exist"});

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name, surname, username, mail, year, phone, password: hashedPassword, status
        })
        res.status(201).json({message: "Registration successful", user})

    }catch(err){
        res.status(500).json({message: "registration error", error: err.message});
    }
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try{
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({message: "username not found", error: err.message});

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({message: "password is incorrect", error: err.message});

        const token = jwt.sign({id: _id} , process.env.JWT, { expiresIn: "2d"});
        res.status(200).json({message: "Login successful", token, user});
    }catch(err){
        res.status(500).json({message: "Login error", error: err.message});
    }
}